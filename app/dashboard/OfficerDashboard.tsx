import DashboardLayout from "../components/DashboardLayout";
import Widget from "../components/Widget";
import ChartCard from "../components/ChartCard";

export default function OfficerDashboard() {
  const menuItems = [
    { label: "Store Request Management", link: "#" },
    { label: "Vendor Request Management", link: "#" },
    { label: "Storage Specs Update", link: "#" },
    { label: "Vendor Registration Approvals", link: "#" }
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <h1 className="text-2xl font-bold mb-6">Government Officer Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Widget title="Pending Store Requests" value="12" />
        <Widget title="Pending Vendor Requests" value="5" />
        <Widget title="Updated Storage Specs" value="3" />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <ChartCard title="Store Requests Trend" dataKey="yield" />
        <ChartCard title="Vendor Requests Trend" dataKey="orders" />
      </div>
    </DashboardLayout>
  );
}
