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
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
          Vendor Dashboard
        </h1>

        {/* Cards Section - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div className="order-1">
            <Widget 
              title="Orders This Month" 
              value={ordersThisMonth.toString()} 
            />
          </div>
          <div className="order-2">
            <Widget 
              title="Pending Payments" 
              value={pendingPayments} 
            />
          </div>
          <div className="order-3 sm:col-span-2 lg:col-span-1">
            <Widget 
              title="Total Spent" 
              value={totalSpent} 
            />
          </div>
        </section>

        {/* Quick Actions Section - Mobile only */}
        <section className="mb-6 sm:mb-8 lg:hidden">
          <h2 className="text-lg font-semibold mb-3 text-gray-900">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-3">
            <button className="flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="font-medium text-gray-900">Browse Crops</span>
              </div>
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button className="flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="font-medium text-gray-900">My Orders</span>
              </div>
              <div className="flex items-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mr-2">
                  3 Pending
                </span>
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
            
            <button className="flex items-center justify-between p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg border border-yellow-200 transition-colors">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-medium text-gray-900">Payments</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">LKR 45,000</span>
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </section>

        {/* Recent Activity - Mobile optimized */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Recent Activity</h2>
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Order #1247 delivered</p>
                    <p className="text-xs text-gray-500">Rice - 50 kg • 2 hours ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">LKR 15,000</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Payment processed</p>
                    <p className="text-xs text-gray-500">Order #1246 • 1 day ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-600">LKR 8,500</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">New order placed</p>
                    <p className="text-xs text-gray-500">Wheat - 30 kg • 2 days ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-600">LKR 9,000</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="w-full sm:w-auto text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  View all activities →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Charts Section - Mobile: Stack vertically, Desktop: 2 columns */}
        <section className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="w-full">
            <ChartCard
              title="Orders Trend"
              dataKeys={["orders"]}
              data={ordersTrendData}
            />
          </div>
          <div className="w-full">
            <ChartCard
              title="Monthly Spend"
              dataKeys={["spend"]}
              data={monthlySpendData}
            />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}