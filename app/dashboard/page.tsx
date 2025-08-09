"use client";

import FarmerDashboard from "./FarmerDashboard";
import OfficerDashboard from "./OfficerDashboard";
import ManagerDashboard from "./ManagerDashboard";
import DeliveryDashboard from "./DeliveryDashboard";
import VendorDashboard from "./VendorDashboard";

type UserRole = "farmer" | "officer" | "manager" | "delivery" | "vendor";

// Temporary — in real app this should come from authentication/session
const getUserRole = (): UserRole => {
  return "delivery"; // change to test different dashboards
};

export default function DashboardPage() {
  const userRole = getUserRole();

  switch (userRole) {
    case "farmer":
      return <FarmerDashboard />;
    case "officer":
      return <OfficerDashboard />;
    case "manager":
      return <ManagerDashboard />;
    case "delivery":
      return <DeliveryDashboard />;
    case "vendor":
      return <VendorDashboard />;
    default:
      return <div>Invalid user role</div>;
  }
}