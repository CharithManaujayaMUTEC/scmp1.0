import DashboardLayout from "../components/DashboardLayout"; 
import Widget from "../components/Widget";
import ChartCard from "../components/ChartCard";

type StorageRequest = {
  id: number;
  farmer: string;
  status: "pending" | "approved" | "rejected";
};

type Status = "pending" | "approved" | "rejected";

export default function OfficerDashboard() {
  const menuItems = [
    { label: "Store Request Management", link: "#" },
    { label: "Vendor Request Management", link: "#" },
    { label: "Storage Specs Update", link: "#" },
    { label: "Vendor Registration Approvals", link: "#" }
  ];

  const storageRequests: StorageRequest[] = [
    { id: 1, farmer: "John Doe", status: "pending" },
    { id: 2, farmer: "Jane Smith", status: "approved" },
    { id: 3, farmer: "Bob Johnson", status: "rejected" },
  ];

  const groupedRequests: Record<Status, StorageRequest[]> = {
    pending: storageRequests.filter(r => r.status === "pending"),
    approved: storageRequests.filter(r => r.status === "approved"),
    rejected: storageRequests.filter(r => r.status === "rejected"),
  };

  const statuses: Status[] = ["pending", "approved", "rejected"];

  // Dummy data for charts
  const usageData = [
    { month: 'Jan', usage: 400 },
    { month: 'Feb', usage: 600 },
    { month: 'Mar', usage: 800 },
    { month: 'Apr', usage: 750 },
    { month: 'May', usage: 900 },
  ];

  const yieldData = [
    { month: 'Jan', yield: 200 },
    { month: 'Feb', yield: 300 },
    { month: 'Mar', yield: 500 },
    { month: 'Apr', yield: 450 },
    { month: 'May', yield: 700 },
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <h1 className="text-2xl font-bold mb-6">Government Officer Dashboard</h1>

      {/* Storage Facility Specs */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Widget title="Storage Capacity (tons)" value="1500" />
        <Widget title="Current Usage (tons)" value="900" />
        <Widget title="Today's Requests" value="35" />
      </div>

      {/* Farmers Storage Requests */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Farmers Storage Requests</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {statuses.map((status) => (
            <div key={status} className="border rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-medium capitalize mb-3">{status} Requests</h3>
              {groupedRequests[status].length === 0 ? (
                <p className="text-gray-500">No {status} requests</p>
              ) : (
                <ul className="space-y-2">
                  {groupedRequests[status].map((req: StorageRequest) => (
                    <li key={req.id} className="flex justify-between items-center border-b pb-2">
                      <span>{req.farmer}</span>
                      <div className="space-x-4 flex">
                        <button
                          aria-label={`View request ${req.id}`}
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => alert(`View request ${req.id}`)}
                          title="View"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                        <button
                          aria-label={`Edit request ${req.id}`}
                          className="text-green-600 hover:text-green-800"
                          onClick={() => alert(`Edit request ${req.id}`)}
                          title="Edit"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11 5h6a2 2 0 012 2v6m-9 9l-6-6a2.828 2.828 0 010-4l3-3a2.828 2.828 0 014 0l6 6m-4 4v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Storage Facility Usage" dataKeys={["usage"]} data={usageData} />
        <ChartCard title="Store Requests Trend" dataKeys={["yield"]} data={yieldData} />
      </div>
    </DashboardLayout>
  );
}
