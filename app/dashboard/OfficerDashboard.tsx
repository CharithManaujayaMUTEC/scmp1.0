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
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Government Officer Dashboard</h1>

        {/* Storage Facility Specs - Mobile: 1 column, Tablet+: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
          <Widget title="Storage Capacity (tons)" value="1500" />
          <Widget title="Current Usage (tons)" value="900" />
          <div className="sm:col-span-2 lg:col-span-1">
            <Widget title="Today's Requests" value="35" />
          </div>
        </div>

        {/* Farmers Storage Requests */}
        <section className="mb-6 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Farmers Storage Requests</h2>
          
          {/* Mobile: Stack vertically, Tablet+: 3 columns */}
          <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {statuses.map((status) => (
              <div key={status} className="border rounded-lg p-3 sm:p-4 shadow-sm bg-white">
                <h3 className="text-base sm:text-lg font-medium capitalize mb-2 sm:mb-3 text-gray-800">
                  {status} Requests
                  <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gray-600 rounded-full">
                    {groupedRequests[status].length}
                  </span>
                </h3>
                
                {groupedRequests[status].length === 0 ? (
                  <p className="text-gray-500 text-sm">No {status} requests</p>
                ) : (
                  <div className="space-y-2">
                    {groupedRequests[status].map((req: StorageRequest) => (
                      <div key={req.id} className="border-b border-gray-200 pb-2 last:border-b-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <span className="text-sm sm:text-base font-medium text-gray-900">
                            {req.farmer}
                          </span>
                          <span className="text-xs text-gray-500 sm:hidden">
                            Request #{req.id}
                          </span>
                          
                          {/* Action buttons */}
                          <div className="flex space-x-2 sm:space-x-4">
                            <button
                              aria-label={`View request ${req.id}`}
                              className="flex items-center justify-center w-8 h-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
                              onClick={() => alert(`View request ${req.id}`)}
                              title="View"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 sm:h-5 sm:w-5"
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
                              className="flex items-center justify-center w-8 h-8 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-full transition-colors"
                              onClick={() => alert(`Edit request ${req.id}`)}
                              title="Edit"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 sm:h-5 sm:w-5"
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
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Charts - Mobile: Stack vertically, Tablet+: 2 columns */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="w-full">
            <ChartCard title="Storage Facility Usage" dataKeys={["usage"]} data={usageData} />
          </div>
          <div className="w-full">
            <ChartCard title="Store Requests Trend" dataKeys={["yield"]} data={yieldData} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}