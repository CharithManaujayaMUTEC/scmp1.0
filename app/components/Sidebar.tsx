"use client";

import React, { useState } from "react";
import { LucideIcon, Award, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";

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
  activeItem?: string;
  onItemClick?: (item: MenuItem) => void;
  collapsed?: boolean;
  onCollapse?: (isCollapsed: boolean) => void;
  isMobile?: boolean;
  onMobileClose?: () => void;
}

const Sidebar = ({
  menuItems,
  logo = { title: "SCMS", subtitle: "Dashboard", color: "bg-gradient-to-br from-green-500 to-green-600" },
  userInfo,
  activeItem,
  onItemClick,
  collapsed: controlledCollapsed,
  onCollapse,
  isMobile = false,
  onMobileClose,
}: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const collapsed = controlledCollapsed ?? internalCollapsed;

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const toggleCollapse = () => {
    const newState = !collapsed;
    setInternalCollapsed(newState);
    onCollapse?.(newState);
  };

  const isExpanded = (label: string) => expandedItems.includes(label);

  const handleItemClick = (item: MenuItem) => {
    onItemClick?.(item);
    // Close mobile menu when item is clicked
    if (isMobile) {
      onMobileClose?.();
    }
  };

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasChildren = item.children?.length;
    const expanded = isExpanded(item.label);

    return (
      <div key={item.label}>
        <div
          onClick={() => (hasChildren ? toggleExpanded(item.label) : handleItemClick(item))}
          className={`flex items-center justify-between px-4 sm:px-6 py-3 cursor-pointer transition-all duration-200
            ${level > 0 ? "ml-4 border-l-2 border-gray-200 pl-8" : ""} 
            hover:bg-gray-50 active:bg-gray-100
            ${isMobile ? 'py-4' : ''}
          `}
        >
          <div className="flex items-center space-x-3">
            {item.icon && <item.icon className="w-5 h-5 text-black flex-shrink-0" />}
            {(!collapsed || isMobile) && (
              <span className={`${isMobile ? 'text-base' : 'text-sm'} font-medium`}>
                {item.label}
              </span>
            )}
            {item.badge && (!collapsed || isMobile) && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                {item.badge}
              </span>
            )}
          </div>
          {(!collapsed || isMobile) && hasChildren && (
            expanded ? <ChevronDown className="w-4 h-4 flex-shrink-0" /> : <ChevronRight className="w-4 h-4 flex-shrink-0" />
          )}
        </div>
        {hasChildren && expanded && (!collapsed || isMobile) && (
          <div>{item.children!.map((child) => renderMenuItem(child, level + 1))}</div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={`
        ${isMobile 
          ? 'w-80 max-w-[85vw]' 
          : collapsed 
            ? 'w-16' 
            : 'w-72'
        } 
        bg-white shadow-lg border-r border-gray-200
        transition-all duration-300 flex flex-col h-screen
        ${isMobile ? 'relative' : ''}
      `}
    >
      {/* Header with Logo and Controls */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 min-h-[64px]">
        {/* Logo Section */}
        {(!collapsed || isMobile) && (
          <div className="flex items-center space-x-3">
            <div className={`${logo.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
              {logo.icon ? (
                <logo.icon className="w-6 h-6 text-white" />
              ) : (
                <Image
                  src="/masterlogo.png"
                  alt="SCMS Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              )}
            </div>
            <div className="min-w-0">
              <h2 className="font-bold text-lg truncate">{logo.title}</h2>
              {logo.subtitle && <p className="text-xs text-black truncate">{logo.subtitle}</p>}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center space-x-2">
          {/* Desktop Collapse Button */}
          {!isMobile && (
            <button
              onClick={toggleCollapse}
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-5 h-5 text-black" />
            </button>
          )}
          
          {/* Mobile Close Button */}
          {isMobile && (
            <button
              onClick={onMobileClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={`mt-2 flex-1 overflow-y-auto ${isMobile ? 'pb-4' : ''}`}>
        <div className="space-y-1">
          {menuItems.map((item) => renderMenuItem(item))}
        </div>
      </nav>

      {/* User Info Section */}
      {userInfo && (!collapsed || isMobile) && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-gray-600">
                {userInfo.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-sm truncate">{userInfo.name}</p>
              <p className="text-xs text-black truncate">{userInfo.role}</p>
            </div>
          </div>
          
          {userInfo.rating && (
            <div className="bg-green-500 text-white p-3 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="font-medium">Rating</span>
              </div>
              <span className="font-bold text-lg">{userInfo.rating}</span>
            </div>
          )}
        </div>
      )}

      {/* Collapsed User Avatar */}
      {userInfo && collapsed && !isMobile && (
        <div className="p-4 border-t border-gray-200 flex justify-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-gray-600">
              {userInfo.name.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;