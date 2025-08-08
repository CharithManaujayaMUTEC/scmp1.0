"use client";

import { Bell, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-[#0097b2] text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-lg font-bold">Smart Crop Management System</h1>
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-[#ff914d] text-white text-xs rounded-full px-1">
            3
          </span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <User className="w-6 h-6" />
          <span className="text-sm">John Doe</span>
        </div>
      </div>
    </header>
  );
}
