import DashboardLayout from "../components/DashboardLayout";
import Widget from "../components/Widget";
import ChartCard from "../components/ChartCard";

export default function VendorDashboard() {
  const menuItems = [
    { label: "Browse Crops", link: "#" },
    { label: "My Orders", link: "#" },
    { label: "Payments", link: "#" }
  ];

  // Dummy data for cards
  const ordersThisMonth = 18;
  const pendingPayments = "LKR 45,000";
  const totalSpent = "LKR 1,200,000";

  // Dummy data for charts
  const ordersTrendData = [
    { month: "Jan", orders: 10 },
    { month: "Feb", orders: 15 },
    { month: "Mar", orders: 12 },
    { month: "Apr", orders: 18 },
    { month: "May", orders: 20 },
  ];

  const monthlySpendData = [
    { month: "Jan", spend: 200000 },
    { month: "Feb", spend: 250000 },
    { month: "Mar", spend: 180000 },
    { month: "Apr", spend: 300000 },
    { month: "May", spend: 270000 },
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <h1 className="text-2xl font-bold mb-6">Vendor Dashboard</h1>

      {/* Cards Section */}
      <section className="grid md:grid-cols-3 gap-6 mb-10">
        <Widget title="Orders This Month" value={ordersThisMonth.toString()} />
        <Widget title="Pending Payments" value={pendingPayments} />
        <Widget title="Total Spent" value={totalSpent} />
      </section>

      {/* Charts Section */}
      <section className="grid md:grid-cols-2 gap-6">
        <ChartCard 
          title="Orders Trend" 
          dataKeys={["orders"]} 
          data={ordersTrendData} 
        />
        <ChartCard 
          title="Monthly Spend" 
          dataKeys={["spend"]} 
          data={monthlySpendData} 
        />
      </section>
    </DashboardLayout>
  );
}
