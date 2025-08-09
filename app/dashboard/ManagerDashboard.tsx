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

  // Dummy data for cards
  const activeFacilities = 8;
  const totalCropsTracked = 125;
  const vendorsApproved = 45;
  const transportPartners = 12;

  // Dummy data for charts
  const facilityUsageData = [
    { month: 'Jan', usagePercent: 65 },
    { month: 'Feb', usagePercent: 70 },
    { month: 'Mar', usagePercent: 75 },
    { month: 'Apr', usagePercent: 80 },
    { month: 'May', usagePercent: 78 },
  ];

  const cropProductionData = [
    { month: 'Jan', production: 1200 },
    { month: 'Feb', production: 1400 },
    { month: 'Mar', production: 1300 },
    { month: 'Apr', production: 1600 },
    { month: 'May', production: 1700 },
  ];

  const marketPriceTrendData = [
    { month: 'Jan', priceIndex: 150 },
    { month: 'Feb', priceIndex: 180 },
    { month: 'Mar', priceIndex: 210 },
    { month: 'Apr', priceIndex: 190 },
    { month: 'May', priceIndex: 220 },
  ];

  const vendorApprovalData = [
    { month: 'Jan', approved: 5 },
    { month: 'Feb', approved: 8 },
    { month: 'Mar', approved: 6 },
    { month: 'Apr', approved: 10 },
    { month: 'May', approved: 9 },
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <h1 className="text-2xl font-bold mb-6">Government Manager Dashboard</h1>

      {/* Cards Section */}
      <section className="grid md:grid-cols-4 gap-6 mb-10">
        <Widget title="Active Facilities" value={activeFacilities.toString()} />
        <Widget title="Total Crops Tracked" value={totalCropsTracked.toString()} />
        <Widget title="Vendors Approved" value={vendorsApproved.toString()} />
        <Widget title="Transport Partners" value={transportPartners.toString()} />
      </section>

      {/* Charts Section */}
      <section className="grid md:grid-cols-2 gap-6">
        <ChartCard 
          title="Facility Usage (%)" 
          dataKeys={["usagePercent"]} 
          data={facilityUsageData} 
        />
        <ChartCard 
          title="Crop Production Trends" 
          dataKeys={["production"]} 
          data={cropProductionData} 
        />
        <ChartCard 
          title="Market Price Trends" 
          dataKeys={["priceIndex"]} 
          data={marketPriceTrendData} 
        />
        <ChartCard 
          title="Vendor Approvals Over Time" 
          dataKeys={["approved"]} 
          data={vendorApprovalData} 
        />
      </section>
    </DashboardLayout>
  );
}
