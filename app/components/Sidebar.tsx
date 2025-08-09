"use client";

import React, { useState } from 'react';
import { LucideIcon, Award, ChevronDown, ChevronRight } from 'lucide-react';

interface MenuItem {
  label: string;
  link: string;
  icon?: LucideIcon;
  badge?: string | number;
  children?: MenuItem[];
}

interface SidebarProps {
  menuItems: MenuItem[];
  logo?: {
    icon?: LucideIcon;
    title: string;
    subtitle?: string;
    color?: string;
  };
  userInfo?: {
    name: string;
    role: string;
    avatar?: string;
    rating?: number;
  };
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  activeItem?: string;
  onItemClick?: (item: MenuItem) => void;
}

const Sidebar = ({ 
  menuItems, 
  logo = { title: "SCMS", subtitle: "Dashboard", color: "bg-gradient-to-br from-green-500 to-green-600" },
  userInfo,
  collapsed = false,
  onCollapse,
  activeItem,
  onItemClick
}: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [activeMenuItem, setActiveMenuItem] = useState(activeItem || menuItems[0]?.link);

  const toggleExpanded = (itemLabel: string) => {
    setExpandedItems(prev => 
      prev.includes(itemLabel) 
        ? prev.filter(item => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  const handleItemClick = (item: MenuItem) => {
    setActiveMenuItem(item.link);
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const isActive = (link: string) => activeMenuItem === link;
  const isExpanded = (label: string) => expandedItems.includes(label);

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isItemExpanded = hasChildren && isExpanded(item.label);
    const active = isActive(item.link);

    return (
      <div key={item.label}>
        <div
          className={`flex items-center justify-between px-6 py-3 text-sm font-medium transition-all duration-200 cursor-pointer group ${
            active
              ? 'bg-green-50 text-green-700 border-r-2 border-green-500'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          } ${level > 0 ? 'ml-4 border-l-2 border-gray-200' : ''}`}
          onClick={() => hasChildren ? toggleExpanded(item.label) : handleItemClick(item)}
        >
          <div className="flex items-center space-x-3">
            {item.icon && (
              <item.icon className={`w-5 h-5 ${active ? 'text-green-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
            )}
            <span className={collapsed ? 'hidden' : 'block'}>{item.label}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            {item.badge && (
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                active 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {item.badge}
              </span>
            )}
            {hasChildren && !collapsed && (
              isItemExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
            )}
          </div>
        </div>
        
        {hasChildren && isItemExpanded && !collapsed && (
          <div className="bg-gray-25">
            {item.children!.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-72'} bg-white shadow-lg border-r border-gray-200 transition-all duration-300 flex flex-col`}>
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 ${logo.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
            {logo.icon ? (
              <logo.icon className="w-7 h-7 text-white" />
            ) : (
              <span className="text-white font-bold text-lg">
                {logo.title.charAt(0)}
              </span>
            )}
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-xl font-bold text-gray-800">{logo.title}</h2>
              {logo.subtitle && (
                <p className="text-sm text-gray-500">{logo.subtitle}</p>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="mt-6 flex-1 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map(item => renderMenuItem(item))}
        </div>
      </nav>
      
      {/* User Info & Performance Card */}
      {userInfo && !collapsed && (
        <div className="p-6 border-t border-gray-200 space-y-4">
          {/* User Info */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              {userInfo.avatar ? (
                <img src={userInfo.avatar} alt={userInfo.name} className="w-10 h-10 rounded-full" />
              ) : (
                <span className="text-gray-600 font-medium text-sm">
                  {userInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{userInfo.name}</p>
              <p className="text-sm text-gray-500 truncate">{userInfo.role}</p>
            </div>
          </div>
          
          {/* Performance Card */}
          {userInfo.rating && (
            <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white">
              <div className="flex items-center justify-between mb-2">
                <Award className="w-8 h-8" />
                <span className="text-2xl font-bold">{userInfo.rating}</span>
              </div>
              <p className="text-sm opacity-90">Your Rating</p>
              <p className="text-xs opacity-75 mt-1">Excellent performance!</p>
            </div>
          )}
        </div>
      )}
      
      {/* Collapse Button */}
      {onCollapse && (
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => onCollapse(!collapsed)}
            className="w-full flex items-center justify-center py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className={`w-4 h-4 transition-transform ${collapsed ? '' : 'rotate-180'}`} />
            {!collapsed && <span className="ml-2">Collapse</span>}
          </button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;