'use client';

import React from 'react';
import FarmerDashboard from './FarmerDashboard';
import OfficerDashboard from './OfficerDashboard';
import ManagerDashboard from './ManagerDashboard';
import VendorDashboard from './VendorDashboard';
import DeliveryDashboard from './DeliveryDashboard';

interface DashboardPageProps {
  searchParams?: {
    role?: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = ({ searchParams }) => {
  const role = searchParams?.role || '';

  switch (role.toLowerCase()) {
    case 'farmer':
      return <FarmerDashboard />;
    case 'officer':
      return <OfficerDashboard />;
    case 'manager':
      return <ManagerDashboard />;
    case 'vendor':
      return <VendorDashboard />;
    case 'delivery':
      return <DeliveryDashboard />;
    default:
      return <p className="p-4 text-red-600">Role not recognized. Please login again.</p>;
  }
};

export default DashboardPage;
