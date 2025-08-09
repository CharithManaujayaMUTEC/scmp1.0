"use client";

import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Widget from "../components/Widget";
import ChartCard from "../components/ChartCard";
import Link from "next/link";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa"; // for icons

// Dummy data for main widgets
const menuItems = [
  { label: "Farm Analytics", link: "#" },
  { label: "Create Storage Request", link: "/request-storage" }, // updated label
  { label: "E-Market", link: "#" },
  { label: "Hotline", link: "#" },
  { label: "Agri Tech Links", link: "#" },
  { label: "Delivery Service Requests", link: "#" },
];

const farmInfo = {
  name: "Sunny Acres",
  area: "15 acres",
  crops: ["Corn", "Tomatoes", "Wheat"],
};

const incomeByCrop = {
  Corn: "$1200",
  Tomatoes: "$900",
  Wheat: "$1500",
};

const timeToHarvest = {
  Corn: "30 days",
  Tomatoes: "15 days",
  Wheat: "45 days",
};

const importantMessages = [
  "Storage facility maintenance scheduled on 20th August.",
  "New pesticide regulations effective from next month.",
  "Reminder: Submit crop reports by end of this week.",
];

const featureButtons = [
  { label: "Request Storage", onClick: () => alert("Request Storage clicked") },
  { label: "Place Market Order", onClick: () => alert("Place Market Order clicked") },
  { label: "Contact Hotline", onClick: () => alert("Contact Hotline clicked") },
  { label: "View Agri Tech Links", onClick: () => alert("View Agri Tech Links clicked") },
];

// Dummy data for Monthly Crop Yield chart
const monthlyCropYieldData = [
  { month: "Jan", Corn: 400, Tomatoes: 300, Wheat: 200 },
  { month: "Feb", Corn: 350, Tomatoes: 320, Wheat: 250 },
  { month: "Mar", Corn: 450, Tomatoes: 280, Wheat: 300 },
  { month: "Apr", Corn: 420, Tomatoes: 350, Wheat: 280 },
  { month: "May", Corn: 480, Tomatoes: 370, Wheat: 320 },
];

// Dummy data for Orders Trend chart
const ordersTrendData = [
  { month: "Jan", VendorA: 240, VendorB: 139, VendorC: 98 },
  { month: "Feb", VendorA: 300, VendorB: 180, VendorC: 130 },
  { month: "Mar", VendorA: 280, VendorB: 150, VendorC: 110 },
  { month: "Apr", VendorA: 350, VendorB: 190, VendorC: 160 },
  { month: "May", VendorA: 400, VendorB: 210, VendorC: 180 },
];

// Dummy storage requests data with status
const storageRequests = {
  pending: [
    { id: 1, title: "Request #001", date: "2025-08-01" },
    { id: 2, title: "Request #002", date: "2025-08-02" },
    { id: 3, title: "Request #003", date: "2025-08-03" },
  ],
  approved: [
    { id: 4, title: "Request #004", date: "2025-07-20" },
    { id: 5, title: "Request #005", date: "2025-07-22" },
    { id: 6, title: "Request #006", date: "2025-07-23" },
    { id: 7, title: "Request #007", date: "2025-07-25" },
    { id: 8, title: "Request #008", date: "2025-07-28" },
    { id: 9, title: "Request #009", date: "2025-07-29" },
    { id: 10, title: "Request #010", date: "2025-07-30" },
  ],
  rejected: [
    { id: 11, title: "Request #011", date: "2025-07-15" },
  ],
};

export default function FarmerDashboard() {
  // State for Monthly Crop Yield Chart
  const [selectedCrops, setSelectedCrops] = useState<string[]>(["All"]);
  const [cropTimeframe, setCropTimeframe] = useState<"weekly" | "monthly" | "annually">("monthly");

  // State for Orders Trend Chart
  const [selectedVendors, setSelectedVendors] = useState<string[]>(["All"]);
  const [vendorTimeframe, setVendorTimeframe] = useState<"weekly" | "monthly" | "annually">("monthly");

  // Determine which crops/vendors to show based on selection
  const crops = ["All", "Corn", "Tomatoes", "Wheat"];
  const vendors = ["All", "VendorA", "VendorB", "VendorC"];

  // Calculate dataKeys for charts depending on selected items
  const cropKeys =
    selectedCrops.includes("All") || selectedCrops.length === 0
      ? ["Corn", "Tomatoes", "Wheat"]
      : selectedCrops;

  const vendorKeys =
    selectedVendors.includes("All") || selectedVendors.length === 0
      ? ["VendorA", "VendorB", "VendorC"]
      : selectedVendors;

  // Handlers for icons (just dummy alerts)
  const handleView = (id: number) => alert(`View request ${id}`);
  const handleEdit = (id: number) => alert(`Edit request ${id}`);
  const handleDelete = (id: number) => {
    if (confirm(`Are you sure you want to delete request ${id}?`)) {
      alert(`Deleted request ${id}`);
    }
  };

  // Render a request row with icons
  const RequestRow = ({ request }: { request: { id: number; title: string; date: string } }) => (
    <div className="flex justify-between items-center border-b py-2 last:border-b-0">
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm sm:text-base truncate">{request.title}</p>
        <p className="text-xs text-black">{request.date}</p>
      </div>
      <div className="flex space-x-2 sm:space-x-3 text-black ml-2">
        <button 
          onClick={() => handleView(request.id)} 
          title="View" 
          className="hover:text-blue-600 p-1 sm:p-2"
        >
          <FaEye className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
        <button 
          onClick={() => handleEdit(request.id)} 
          title="Edit" 
          className="hover:text-green-600 p-1 sm:p-2"
        >
          <FaEdit className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
        <button 
          onClick={() => handleDelete(request.id)} 
          title="Delete" 
          className="hover:text-red-600 p-1 sm:p-2"
        >
          <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <DashboardLayout menuItems={menuItems}>
      <div className="px-2 sm:px-4 lg:px-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Farmer Dashboard</h1>

        {/* Top Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {/* Farm Info Card */}
          <Widget
            title="Farm Information"
            value={farmInfo.name}
            subtitle={`Area: ${farmInfo.area} | Crops: ${farmInfo.crops.join(", ")}`}
            color="bg-blue-500"
            size="md"
          />

          {/* Income by Crop Card */}
          <Widget
            title="Income by Crop"
            value=""
            subtitle={Object.entries(incomeByCrop)
              .map(([crop, income]) => `${crop}: ${income}`)
              .join(" | ")}
            color="bg-green-500"
            size="md"
          />

          {/* Time to Next Harvest Card */}
          <Widget
            title="Time to Next Harvest"
            value=""
            subtitle={Object.entries(timeToHarvest)
              .map(([crop, time]) => `${crop}: ${time}`)
              .join(" | ")}
            color="bg-yellow-500"
            size="md"
          />
        </div>

        {/* Alert Box and Feature Buttons - Mobile Stacked */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Alert Box */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 sm:p-4 rounded shadow order-2 lg:order-1">
            <h2 className="font-semibold mb-2 text-sm sm:text-base">Important Messages</h2>
            <ul className="list-disc list-inside space-y-1">
              {importantMessages.map((msg, idx) => (
                <li key={idx} className="text-xs sm:text-sm">{msg}</li>
              ))}
            </ul>
          </div>

          {/* Feature Buttons Box */}
          <div className="bg-white p-3 sm:p-4 rounded shadow flex flex-col space-y-2 sm:space-y-3 order-1 lg:order-2">
            <h2 className="font-semibold mb-2 text-sm sm:text-base">Quick Access Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
              {featureButtons.map(({ label, onClick }, idx) => (
                <button
                  key={idx}
                  onClick={onClick}
                  className="bg-green-600 text-white py-2 px-3 rounded hover:bg-green-700 transition text-xs sm:text-sm"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Cards - Mobile Stacked */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          <ChartCard
            title="Monthly Crop Yield (kg)"
            data={monthlyCropYieldData}
            dataKeys={cropKeys}
            dropdownOptions={crops}
            selectedItems={selectedCrops}
            onSelectionChange={setSelectedCrops}
            timeframe={cropTimeframe}
            setTimeframe={setCropTimeframe}
          />
          <ChartCard
            title="Orders Trend"
            data={ordersTrendData}
            dataKeys={vendorKeys}
            dropdownOptions={vendors}
            selectedItems={selectedVendors}
            onSelectionChange={setSelectedVendors}
            timeframe={vendorTimeframe}
            setTimeframe={setVendorTimeframe}
          />
        </div>

        {/* Storage Requests Status - Responsive Layout */}
        <section className="mt-8 sm:mt-12">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Storage Requests Status</h2>
          
          {/* Mobile: Stacked, Tablet+: Side by side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Pending */}
            <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 sm:p-4 shadow flex flex-col">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-center">Pending Requests</h3>
              <div className="flex-1 overflow-y-auto max-h-48 sm:max-h-56">
                {storageRequests.pending.map((req) => (
                  <RequestRow key={req.id} request={req} />
                ))}
                {storageRequests.pending.length === 0 && (
                  <p className="text-center text-black text-sm">No pending requests</p>
                )}
              </div>
            </div>

            {/* Approved */}
            <div className="bg-green-100 border border-green-400 rounded-lg p-3 sm:p-4 shadow flex flex-col">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-center">Approved Requests</h3>
              <div className="flex-1 overflow-y-auto max-h-48 sm:max-h-56">
                {storageRequests.approved.map((req) => (
                  <RequestRow key={req.id} request={req} />
                ))}
                {storageRequests.approved.length === 0 && (
                  <p className="text-center text-black text-sm">No approved requests</p>
                )}
              </div>
            </div>

            {/* Rejected */}
            <div className="bg-red-100 border border-red-400 rounded-lg p-3 sm:p-4 shadow flex flex-col">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-center">Rejected Requests</h3>
              <div className="flex-1 overflow-y-auto max-h-48 sm:max-h-56">
                {storageRequests.rejected.map((req) => (
                  <RequestRow key={req.id} request={req} />
                ))}
                {storageRequests.rejected.length === 0 && (
                  <p className="text-center text-black text-sm">No rejected requests</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 flex justify-center">
            <Link href="/request-storage">
              <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-blue-700 transition text-sm sm:text-base w-full sm:w-auto max-w-sm">
                + Create Storage Request
              </button>
            </Link>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}