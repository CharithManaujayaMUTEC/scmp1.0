import DashboardLayout from "../components/DashboardLayout";
import Widget from "../components/Widget";

export default function DeliveryDashboard() {
  const menuItems = [
    { label: "Assigned Deliveries", link: "#" },
    { label: "Accepted Deliveries", link: "#" },
    { label: "Completed Deliveries", link: "#" }
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <h1 className="text-2xl font-bold mb-6">Delivery Partner Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Widget title="Assigned" value="5" />
        <Widget title="Accepted" value="3" />
        <Widget title="Completed" value="20" />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Current Deliveries</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p>Delivery #001 - Colombo → Galle</p>
          <div className="flex gap-4 mt-2">
            <button className="bg-[#7ed957] text-white px-3 py-1 rounded">Accept</button>
            <button className="bg-[#ff914d] text-white px-3 py-1 rounded">Reject</button>
            <button className="bg-[#0097b2] text-white px-3 py-1 rounded">Mark Finished</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
