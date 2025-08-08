import DashboardLayout from "../components/DashboardLayout";
import Widget from "../components/Widget";
import ChartCard from "../components/ChartCard";

export default function ManagerDashboard() {
  const menuItems = [
    { label: "Storage Facility Analytics", link: "#" },
    { label: "Crop Analytics", link: "#" },
    { label: "Market Analytics", link: "#" },
    { label: "Vendor Analytics", link: "#" },
    { label: "Transport Partner Approval/Removal", link: "#" }
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <h1 className="text-2xl font-bold mb-6">Government Manager Dashboard</h1>
      <div className="grid md:grid-cols-4 gap-6">
        <Widget title="Active Facilities" value="8" />
        <Widget title="Total Crops Tracked" value="125" />
        <Widget title="Vendors Approved" value="45" />
        <Widget title="Transport Partners" value="12" />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <ChartCard title="Facility Usage (%)" dataKey="yield" />
        <ChartCard title="Market Price Trends" dataKey="orders" />
      </div>
    </DashboardLayout>
  );
}
