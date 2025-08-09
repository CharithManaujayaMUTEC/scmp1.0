"use client";

import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Widget from '../components/Widget';
import ChartCard from '../components/ChartCard';
import { 
  Truck, 
  Package, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Phone, 
  Star,
  Navigation,
  TrendingUp,
  Filter,
  DollarSign,
  Route,
  Award,
  Eye,
  Timer,
  Fuel
} from 'lucide-react';

const DeliveryDashboard = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample data for charts
  const deliveryData = [
    { month: "Jan", deliveries: 45, revenue: 125000, fuel: 8500 },
    { month: "Feb", deliveries: 52, revenue: 148000, fuel: 9200 },
    { month: "Mar", deliveries: 48, revenue: 135000, fuel: 8800 },
    { month: "Apr", deliveries: 61, revenue: 172000, fuel: 10500 },
    { month: "May", deliveries: 55, revenue: 158000, fuel: 9800 },
    { month: "Jun", deliveries: 67, revenue: 189000, fuel: 11200 }
  ];

  const statusData = [
    { name: 'Completed', value: 68 },
    { name: 'In Transit', value: 15 },
    { name: 'Assigned', value: 12 },
    { name: 'Delayed', value: 5 }
  ];

  const menuItems = [
    { label: "Dashboard", link: "#", icon: TrendingUp },
    { label: "Active Deliveries", link: "#", icon: Truck, badge: 8 },
    { label: "Assigned Tasks", link: "#", icon: Package, badge: 5 },
    { label: "Completed", link: "#", icon: CheckCircle },
    { label: "Route Planning", link: "#", icon: Route },
    { label: "Performance", link: "#", icon: Award }
  ];

  const deliveries = [
    {
      id: 'DEL-001',
      status: 'assigned',
      priority: 'high',
      pickup: 'Kandy Cold Center',
      destination: 'Colombo Central Market',
      distance: '116km',
      estimatedTime: '2h 30m',
      cargo: 'Fresh Vegetables',
      weight: '500kg',
      value: 'LKR 75,000',
      contact: '+94 71 234 5678',
      assignedTime: '8:30 AM',
      deadline: '2:00 PM',
      customerRating: 4.8
    },
    {
      id: 'DEL-002',
      status: 'in-transit',
      priority: 'medium',
      pickup: 'Galle Cold Center',
      destination: 'Matara Distribution Hub',
      distance: '45km',
      estimatedTime: '45m remaining',
      cargo: 'Mixed Fruits',
      weight: '300kg',
      value: 'LKR 45,000',
      contact: '+94 77 987 6543',
      assignedTime: '6:00 AM',
      deadline: '11:00 AM',
      customerRating: 4.9
    },
    {
      id: 'DEL-003',
      status: 'completed',
      priority: 'low',
      pickup: 'Kurunegala Center',
      destination: 'Negombo Fish Market',
      distance: '85km',
      estimatedTime: 'Completed',
      cargo: 'Organic Produce',
      weight: '200kg',
      value: 'LKR 35,000',
      contact: '+94 76 456 7890',
      assignedTime: '5:30 AM',
      deadline: '9:30 AM',
      customerRating: 5.0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'assigned': return 'bg-yellow-100 text-yellow-800';
      case 'in-transit': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-black';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  const filteredDeliveries = deliveries.filter(delivery => 
    filterStatus === 'all' || delivery.status === filterStatus
  );

  return (
    <DashboardLayout
      menuItems={menuItems}
      title="Delivery Dashboard"
      subtitle="Smart Crop Management System"
      user={{
        name: "Chaminda Silva",
        role: "Delivery Partner",
        rating: 4.9
      }}
      notifications={[
        {
          id: '1',
          title: 'New Delivery Assignment',
          message: 'DEL-004: Colombo to Galle route assigned',
          time: '5 min ago',
          read: false,
          type: 'info'
        },
        {
          id: '2',
          title: 'Route Completed',
          message: 'DEL-003 successfully delivered',
          time: '15 min ago',
          read: false,
          type: 'success'
        },
        {
          id: '3',
          title: 'Weather Alert',
          message: 'Heavy rain expected on Kandy route',
          time: '1 hour ago',
          read: true,
          type: 'warning'
        }
      ]}
      logo={{
        icon: Truck,
        title: "SCMS",
        subtitle: "Delivery Portal",
        color: "bg-gradient-to-br from-green-500 to-green-600"
      }}
      searchPlaceholder="Search deliveries..."
    >
      {/* Stats Overview - Mobile Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
        <Widget 
          title="Active Deliveries" 
          value="8" 
          icon={Truck} 
          color="bg-gradient-to-br from-blue-500 to-blue-600" 
          change="+2 from yesterday" 
          trend="up"
        />
        <Widget 
          title="Completed Today" 
          value="12" 
          icon={CheckCircle} 
          color="bg-gradient-to-br from-green-500 to-green-600" 
          change="+4 from yesterday" 
          trend="up"
        />
        <Widget 
          title="Total Earnings" 
          value="LKR 25,500" 
          icon={DollarSign} 
          color="bg-gradient-to-br from-purple-500 to-purple-600" 
          change="+15% this week" 
          trend="up"
        />
        <Widget 
          title="Distance Today" 
          value="245km" 
          icon={Navigation} 
          color="bg-gradient-to-br from-orange-500 to-orange-600" 
          change="Average: 220km" 
          trend="up"
        />
      </div>

      {/* Charts Section - Stack on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <ChartCard 
          title="Monthly Delivery Performance" 
          dataKeys={["deliveries"]} 
          data={deliveryData}
          type="area"
          color="#7ed957"
        />
        <ChartCard 
          title="Delivery Status Distribution" 
          dataKeys={["value"]} 
          data={statusData}
          type="pie"
        />
      </div>

      {/* Current Deliveries Section */}
      <div className="bg-white rounded-lg lg:rounded-xl shadow-sm border border-gray-100 mb-6 lg:mb-8">
        {/* Header with Mobile-Optimized Controls */}
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
            <h2 className="text-lg lg:text-xl font-bold text-black">Current Deliveries</h2>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <select
                title="Filter Status"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full sm:w-auto px-3 lg:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm lg:text-base"
              >
                <option value="all">All Status</option>
                <option value="assigned">Assigned</option>
                <option value="in-transit">In Transit</option>
                <option value="completed">Completed</option>
              </select>
              <button className="flex items-center justify-center space-x-2 px-3 lg:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm lg:text-base">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Delivery Cards - Mobile Optimized */}
        <div className="p-4 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            {filteredDeliveries.map((delivery) => (
              <div key={delivery.id} className={`bg-gray-50 rounded-lg lg:rounded-xl border-l-4 ${getPriorityColor(delivery.priority)} hover:shadow-md transition-shadow`}>
                <div className="p-4 lg:p-6">
                  {/* Header - Mobile Optimized */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2 sm:gap-0">
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-base lg:text-lg text-black">{delivery.id}</span>
                      <span className={`px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(delivery.status)}`}>
                        {delivery.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-black">{delivery.customerRating}</span>
                    </div>
                  </div>

                  {/* Route - Improved Mobile Layout */}
                  <div className="space-y-3 mb-4 lg:mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-black text-sm lg:text-base truncate">{delivery.pickup}</p>
                        <p className="text-xs lg:text-sm text-gray-600">Pickup • {delivery.assignedTime}</p>
                      </div>
                    </div>
                    
                    <div className="ml-1.5 w-px h-4 lg:h-6 bg-gray-300"></div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-black text-sm lg:text-base truncate">{delivery.destination}</p>
                        <p className="text-xs lg:text-sm text-gray-600">Delivery • by {delivery.deadline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details Grid - Mobile Optimized */}
                  <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6 text-xs lg:text-sm">
                    <div>
                      <p className="text-gray-600">Distance</p>
                      <p className="font-medium text-black">{delivery.distance}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Est. Time</p>
                      <p className="font-medium text-black">{delivery.estimatedTime}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Cargo</p>
                      <p className="font-medium text-black truncate">{delivery.cargo}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Weight</p>
                      <p className="font-medium text-black">{delivery.weight}</p>
                    </div>
                  </div>

                  {/* Value and Contact - Mobile Layout */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 p-3 bg-green-50 rounded-lg gap-2 sm:gap-0">
                    <div>
                      <p className="text-xs lg:text-sm text-gray-600">Cargo Value</p>
                      <p className="font-bold text-green-600 text-base lg:text-lg">{delivery.value}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-xs lg:text-sm text-gray-600">Contact</p>
                      <p className="font-medium text-black text-sm lg:text-base">{delivery.contact}</p>
                    </div>
                  </div>

                  {/* Action Buttons - Mobile Optimized */}
                  <div className="space-y-2">
                    {delivery.status === 'assigned' && (
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <button className="flex-1 bg-green-600 text-white py-2.5 lg:py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2 text-sm lg:text-base">
                          <CheckCircle className="w-4 h-4" />
                          <span>Accept</span>
                        </button>
                        <button className="flex-1 bg-gray-200 text-black py-2.5 lg:py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm lg:text-base">
                          Reject
                        </button>
                      </div>
                    )}
                    
                    {delivery.status === 'in-transit' && (
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <button className="flex-1 bg-blue-600 text-white py-2.5 lg:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2 text-sm lg:text-base">
                          <Eye className="w-4 h-4" />
                          <span>Track Route</span>
                        </button>
                        <button className="flex-1 bg-green-600 text-white py-2.5 lg:py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2 text-sm lg:text-base">
                          <CheckCircle className="w-4 h-4" />
                          <span>Complete</span>
                        </button>
                      </div>
                    )}
                    
                    {delivery.status === 'completed' && (
                      <button className="w-full bg-gray-100 text-black py-2.5 lg:py-3 px-4 rounded-lg font-medium cursor-not-allowed flex items-center justify-center space-x-2 text-sm lg:text-base">
                        <CheckCircle className="w-4 h-4" />
                        <span>Completed</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics - Mobile Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Weekly Performance */}
        <div className="bg-white p-4 lg:p-6 rounded-lg lg:rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-base lg:text-lg font-bold text-black mb-4">Weekly Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-black text-sm lg:text-base">On-Time Delivery</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 lg:w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-green-500"></div>
                </div>
                <span className="text-xs lg:text-sm font-medium">98%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-black text-sm lg:text-base">Customer Rating</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 lg:w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-yellow-500"></div>
                </div>
                <span className="text-xs lg:text-sm font-medium">4.9</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-black text-sm lg:text-base">Fuel Efficiency</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 lg:w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-blue-500"></div>
                </div>
                <span className="text-xs lg:text-sm font-medium">94%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Revenue Chart */}
        <ChartCard 
          title="Monthly Revenue" 
          dataKeys={["revenue"]}
          data={deliveryData}
          color="#0097b2"
          height={200}
        />

        {/* Quick Stats */}
        <div className="bg-white p-4 lg:p-6 rounded-lg lg:rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-base lg:text-lg font-bold text-black mb-4">Quick Stats</h3>
          <div className="space-y-3 lg:space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Timer className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-blue-900 text-sm lg:text-base">Avg Delivery Time</span>
              </div>
              <span className="font-bold text-blue-600 text-sm lg:text-base">2.3 hours</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Fuel className="w-4 lg:w-5 h-4 lg:h-5 text-green-600 flex-shrink-0" />
                <span className="font-medium text-green-900 text-sm lg:text-base">Fuel Cost</span>
              </div>
              <span className="font-bold text-green-600 text-sm lg:text-base">LKR 3,200</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Route className="w-4 lg:w-5 h-4 lg:h-5 text-purple-600 flex-shrink-0" />
                <span className="font-medium text-purple-900 text-sm lg:text-base">Routes Completed</span>
              </div>
              <span className="font-bold text-purple-600 text-sm lg:text-base">156</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DeliveryDashboard;