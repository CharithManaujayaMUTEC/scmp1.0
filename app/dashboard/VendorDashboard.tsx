import DashboardLayout from "../components/DashboardLayout";
import Widget from "../components/Widget";
import ChartCard from "../components/ChartCard";

export default function VendorDashboard() {
  const menuItems = [
    { label: "Browse Crops", link: "#" },
    { label: "My Orders", link: "#" },
    { label: "Payments", link: "#" }
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <h1 className="text-2xl font-bold mb-6">Vendor Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Widget title="Orders This Month" value="18" />
        <Widget title="Pending Payments" value="LKR 45,000" />
        <Widget title="Total Spent" value="LKR 1,200,000" />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <ChartCard title="Orders Trend" dataKey="orders" />
        <ChartCard title="Monthly Spend" dataKey="yield" />
      </div>
    </DashboardLayout>
  );
}
