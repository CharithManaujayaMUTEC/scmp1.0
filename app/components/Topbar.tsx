"use client";

import { Bell, User } from "lucide-react";
import React from "react";

interface UserInfo {
  name: string;
  role: string;
  avatar?: string;
}

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type?: "info" | "warning" | "success" | "error";
}

interface TopbarProps {
  title: string;
  subtitle?: string;
  user: UserInfo;
  notifications: NotificationItem[];
  onSearch?: (query: string) => void;
  onMenuClick?: () => void;
  searchPlaceholder?: string;
  showSearch?: boolean;
  actions?: React.ReactNode;
}

export default function Topbar({
  title,
  subtitle,
  user,
  notifications,
  onSearch,
  onMenuClick,
  searchPlaceholder = "Search...",
  showSearch = true,
  actions
}: TopbarProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="bg-[#0097b2] text-white px-6 py-4 flex justify-between items-center shadow">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded hover:bg-[#007e93]"
          >
            ☰
          </button>
        )}
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          {subtitle && (
            <p className="text-sm opacity-80">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {showSearch && onSearch && (
          <input
            type="text"
            placeholder={searchPlaceholder}
            onChange={(e) => onSearch(e.target.value)}
            className="px-2 py-1 rounded text-black text-sm"
          />
        )}

        {actions}

        {/* Notifications */}
        <button className="relative">
          <Bell className="w-6 h-6" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#ff914d] text-white text-xs rounded-full px-1">
              {unreadCount}
            </span>
          )}
        </button>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <User className="w-6 h-6" />
          <span className="text-sm">{user.name}</span>
        </div>
      </div>
    </header>
  );
}
