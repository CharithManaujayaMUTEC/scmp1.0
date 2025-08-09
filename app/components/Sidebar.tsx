"use client";

import React, { useState } from "react";
import { LucideIcon, Award, ChevronDown, ChevronRight, Menu } from "lucide-react";
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
}

const Sidebar = ({
  menuItems,
  logo = { title: "SCMS", subtitle: "Dashboard", color: "bg-gradient-to-br from-green-500 to-green-600" },
  userInfo,
  activeItem,
  onItemClick,
  collapsed: controlledCollapsed,
  onCollapse,
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

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasChildren = item.children?.length;
    const expanded = isExpanded(item.label);

    return (
      <div key={item.label}>
        <div
          onClick={() => (hasChildren ? toggleExpanded(item.label) : onItemClick?.(item))}
          className={`flex items-center justify-between px-6 py-3 cursor-pointer transition-all duration-200
            ${level > 0 ? "ml-4 border-l-2 border-gray-200" : ""} hover:bg-gray-50`}
        >
          <div className="flex items-center space-x-3">
            {item.icon && <item.icon className="w-5 h-5 text-black" />}
            {!collapsed && <span>{item.label}</span>}
          </div>
          {!collapsed && hasChildren && (
            expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
          )}
        </div>
        {hasChildren && expanded && !collapsed && (
          <div>{item.children!.map((child) => renderMenuItem(child, level + 1))}</div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={`${collapsed ? "w-16" : "w-72"} bg-white shadow-lg border-r border-gray-200
      transition-all duration-300 flex flex-col h-min-screen`}
    >
      {/* Collapse Button & Logo */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center space-x-3 space-y-1.5">
            <div className={`${logo.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
  {logo.icon ? (
    <logo.icon className="w-6 h-6 text-white" />
  ) : (
    // Replace this span with your image
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
            <div>
              <h2 className="font-bold">{logo.title}</h2>
              {logo.subtitle && <p className="text-xs text-black">{logo.subtitle}</p>}
            </div>
          </div>
        )}
        <button
          onClick={toggleCollapse}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-4 flex-1 overflow-y-auto">{menuItems.map((item) => renderMenuItem(item))}</nav>

      {/* User Info */}
      {userInfo && !collapsed && (
        <div className="p-4 border-t border-gray-200">
          <p className="font-medium">{userInfo.name}</p>
          <p className="text-xs text-black">{userInfo.role}</p>
          {userInfo.rating && (
            <div className="mt-2 bg-green-500 text-white p-2 rounded-lg flex items-center justify-between">
              <Award className="w-5 h-5" />
              <span>{userInfo.rating}</span>
            </div>
          )}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
