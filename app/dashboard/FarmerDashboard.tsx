import DashboardLayout from "../components/DashboardLayout";
import Widget from "../components/Widget";
import ChartCard from "../components/ChartCard";

export default function FarmerDashboard() {
  const menuItems = [
    { label: "Farm Analytics", link: "#" },
    { label: "Storage Requests", link: "#" },
    { label: "E-Market", link: "#" },
    { label: "Hotline", link: "#" },
    { label: "Agri Tech Links", link: "#" },
    { label: "Delivery Service Requests", link: "#" }
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <h1 className="text-2xl font-bold mb-6">Farmer Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Widget title="Total Yield" value="12,500 kg" />
        <Widget title="Storage Requests" value="8" />
        <Widget title="Orders in E-Market" value="15" />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <ChartCard title="Monthly Crop Yield (kg)" dataKey="yield" />
        <ChartCard title="Orders Trend" dataKey="orders" />
      </div>
    </DashboardLayout>
  );
}
