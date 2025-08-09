"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  label: string;
  link: string;
  icon?: LucideIcon;
  badge?: string | number;
  children?: MenuItem[];
}

interface UserInfo {
  name: string;
  role: string;
  avatar?: string;
  email?: string;
  rating?: number;
}

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type?: 'info' | 'warning' | 'success' | 'error';
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  menuItems: MenuItem[];
  title?: string;
  subtitle?: string;
  user?: UserInfo;
  notifications?: NotificationItem[];
  logo?: {
    icon?: LucideIcon;
    title: string;
    subtitle?: string;
    color?: string;
  };
  onSearch?: (query: string) => void;
  searchPlaceholder?: string;
  showSearch?: boolean;
  sidebarCollapsed?: boolean;
  onSidebarCollapse?: (collapsed: boolean) => void;
  headerActions?: React.ReactNode;
  className?: string;
}

const DashboardLayout = ({
  children,
  menuItems,
  title = "Dashboard",
  subtitle = "Welcome back",
  user = { name: "John Doe", role: "User" },
  notifications = [],
  logo,
  onSearch,
  searchPlaceholder = "Search...",
  showSearch = true,
  sidebarCollapsed = false,
  onSidebarCollapse,
  headerActions,
  className = ""
}: DashboardLayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(sidebarCollapsed);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSidebarCollapse = (isCollapsed: boolean) => {
    setCollapsed(isCollapsed);
    if (onSidebarCollapse) {
      onSidebarCollapse(isCollapsed);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`min-h-screen bg-gray-50 flex ${className}`}>
      {/* Mobile Overlay */}
      {isMobile && mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className="flex min-h-screen">
        <Sidebar
          menuItems={menuItems}
          logo={logo}
          userInfo={user}
          collapsed={!isMobile && collapsed}
          onCollapse={!isMobile ? handleSidebarCollapse : undefined}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <Topbar
          title={title}
          subtitle={subtitle}
          user={user}
          notifications={notifications}
          onSearch={onSearch}
          onMenuClick={isMobile ? handleMobileMenuToggle : undefined}
          searchPlaceholder={searchPlaceholder}
          showSearch={showSearch}
          actions={headerActions}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <p>
              © {new Date().getFullYear()} Smart Crop Management System - Sri Lanka
            </p>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Utility component for quick layout setup
export const QuickDashboardLayout = ({ 
  children, 
  menuItems, 
  userRole = "User" 
}: { 
  children: React.ReactNode; 
  menuItems: MenuItem[]; 
  userRole?: string; 
}) => (
  <DashboardLayout
    menuItems={menuItems}
    title="SCMS Dashboard"
    subtitle="Smart Crop Management System"
    user={{
      name: "John Doe",
      role: userRole,
      rating: 4.8
    }}
    notifications={[
      {
        id: '1',
        title: 'New Delivery Assignment',
        message: 'You have been assigned a new delivery task',
        time: '5 min ago',
        read: false,
        type: 'info'
      },
      {
        id: '2',
        title: 'Route Optimization Complete',
        message: 'Your delivery route has been optimized',
        time: '15 min ago',
        read: false,
        type: 'success'
      },
      {
        id: '3',
        title: 'Weather Alert',
        message: 'Heavy rain expected on your route',
        time: '1 hour ago',
        read: true,
        type: 'warning'
      }
    ]}
    logo={{
      title: "SCMS",
      subtitle: "Management System",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    }}
  >
    {children}
  </DashboardLayout>
);

export default DashboardLayout;