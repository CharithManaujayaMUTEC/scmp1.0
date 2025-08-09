"use client";

import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

type StorageFacility = {
  id: string;
  name: string;
  address: string;
  supportedCrops: string[];
};

export default function StorageRequestPage() {
  const menuItems = [
    { label: "Farm Analytics", link: "#" },
    { label: "Storage Requests", link: "#" },
    { label: "E-Market", link: "#" },
    { label: "Hotline", link: "#" },
    { label: "Agri Tech Links", link: "#" },
    { label: "Delivery Service Requests", link: "#" },
  ];

  const [cropOptions, setCropOptions] = useState<string[]>([]);
  const [facilities, setFacilities] = useState<StorageFacility[]>([]);

  // For address type and new address fields
  const [addressType, setAddressType] = useState<"Home" | "Farm" | "New">("Home");

  const [formData, setFormData] = useState({
    requestId: "",
    farmerId: "FARM-10045",
    address: "", // final composed address
    cropType: "",
    deliveryDate: "",
    cropQuality: "",
    temperatureType: "",
    quantity: "",
    notes: "",
    selectedFacilityId: "",
    // New address details
    newAddressLine1: "",
    newAddressLine2: "",
    newCity: "",
    newState: "",
    newZip: "",
  });

  // Mock home and farm addresses (could be loaded from user profile)
  const homeAddress = "100 Home St, Springfield, IL";
  const farmAddress = "200 Farm Rd, Shelbyville, IL";

  const router = useRouter();

  useEffect(() => {
    // Crop options
    setCropOptions(["Corn", "Tomatoes", "Wheat"]);

    // Dummy storage facilities
    setFacilities([
      {
        id: "SF-001",
        name: "Green Valley Storage",
        address: "123 Green St, Springfield, IL",
        supportedCrops: ["Corn", "Wheat"],
      },
      {
        id: "SF-002",
        name: "Tomato Central",
        address: "456 Red Rd, Springfield, IL",
        supportedCrops: ["Tomatoes"],
      },
      {
        id: "SF-003",
        name: "Harvest Hub",
        address: "789 Farm Lane, Shelbyville, IL",
        supportedCrops: ["Corn", "Tomatoes", "Wheat"],
      },
      {
        id: "SF-004",
        name: "Sunshine Storage",
        address: "321 Sunny Blvd, Ogdenville, IL",
        supportedCrops: ["Wheat"],
      },
      {
        id: "SF-005",
        name: "Cornfield Warehouse",
        address: "654 Maize Dr, Capital City, IL",
        supportedCrops: ["Corn"],
      },
    ]);
  }, []);

  // Compose final address whenever addressType or new address fields change
  useEffect(() => {
    let addr = "";
    if (addressType === "Home") addr = homeAddress;
    else if (addressType === "Farm") addr = farmAddress;
    else if (addressType === "New") {
      addr = [
        formData.newAddressLine1,
        formData.newAddressLine2,
        formData.newCity,
        formData.newState,
        formData.newZip,
      ]
        .filter(Boolean)
        .join(", ");
    }
    setFormData((prev) => ({ ...prev, address: addr }));
  }, [
    addressType,
    formData.newAddressLine1,
    formData.newAddressLine2,
    formData.newCity,
    formData.newState,
    formData.newZip,
  ]);

  // Removed facility filtering — always show all facilities in dropdown

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAddressType(e.target.value as "Home" | "Farm" | "New");
    if (e.target.value !== "New") {
      setFormData((prev) => ({
        ...prev,
        newAddressLine1: "",
        newAddressLine2: "",
        newCity: "",
        newState: "",
        newZip: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.selectedFacilityId) {
      alert("Please select a storage facility from the list.");
      return;
    }

    const generatedId = `SR-${new Date()
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, "")}-${uuidv4().slice(0, 5)}`;

    const requestPayload = { ...formData, requestId: generatedId };

    console.log("Submitting Storage Request:", requestPayload);

    router.push(`/storage-request-receipt?requestId=${generatedId}`);

    setFormData({
      requestId: "",
      farmerId: "FARM-10045",
      address: "",
      cropType: "",
      deliveryDate: "",
      cropQuality: "",
      temperatureType: "",
      quantity: "",
      notes: "",
      selectedFacilityId: "",
      newAddressLine1: "",
      newAddressLine2: "",
      newCity: "",
      newState: "",
      newZip: "",
    });
    setAddressType("Home");
  };

  return (
    <DashboardLayout menuItems={menuItems}>
      <h1 className="text-2xl font-bold mb-6">Request Storage Space</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
          alignItems: "start",
        }}
      >
        {/* Crop Type */}
        <div className="flex flex-col">
          <label htmlFor="cropType" className="font-semibold mb-1">
            Crop Type
          </label>
          <select
            id="cropType"
            name="cropType"
            value={formData.cropType}
            onChange={handleChange}
            required
            className="border rounded p-2"
          >
            <option value="">Select Crop</option>
            {cropOptions.map((crop) => (
              <option key={crop} value={crop}>
                {crop}
              </option>
            ))}
          </select>
        </div>

        {/* Delivery Date */}
        <div className="flex flex-col">
          <label htmlFor="deliveryDate" className="font-semibold mb-1">
            Delivery Date
          </label>
          <input
            id="deliveryDate"
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            required
            className="border rounded p-2"
          />
        </div>

        {/* Crop Quality */}
        <div className="flex flex-col">
          <label htmlFor="cropQuality" className="font-semibold mb-1">
            Crop Quality
          </label>
          <input
            id="cropQuality"
            type="text"
            name="cropQuality"
            placeholder="e.g., Grade A, Organic"
            value={formData.cropQuality}
            onChange={handleChange}
            required
            className="border rounded p-2"
          />
        </div>

        {/* Temperature Type */}
        <div className="flex flex-col">
          <label htmlFor="temperatureType" className="font-semibold mb-1">
            Temperature Type
          </label>
          <select
            id="temperatureType"
            name="temperatureType"
            value={formData.temperatureType}
            onChange={handleChange}
            required
            className="border rounded p-2"
          >
            <option value="">Select Temperature</option>
            <option value="Cold">Cold</option>
            <option value="Ambient">Ambient</option>
            <option value="Frozen">Frozen</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="flex flex-col">
          <label htmlFor="quantity" className="font-semibold mb-1">
            Quantity (in kg)
          </label>
          <input
            id="quantity"
            type="number"
            name="quantity"
            placeholder="e.g., 500"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1"
            className="border rounded p-2"
          />
        </div>

        {/* Notes - full width */}
        <div className="flex flex-col" style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="notes" className="font-semibold mb-1">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Any special handling instructions..."
            value={formData.notes}
            onChange={handleChange}
            className="border rounded p-2"
            rows={4}
          />
        </div>

        {/* Address Type (at the end) */}
        <div className="flex flex-col" style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="addressType" className="font-semibold mb-1">
            Address Type
          </label>
          <select
            id="addressType"
            name="addressType"
            value={addressType}
            onChange={handleAddressTypeChange}
            className="border rounded p-2"
          >
            <option value="Home">Home Address</option>
            <option value="Farm">Farm Address</option>
            <option value="New">New Address</option>
          </select>
        </div>

        {/* New Address Fields (only if selected) */}
        {addressType === "New" && (
          <>
            <div className="flex flex-col">
              <label htmlFor="newAddressLine1" className="font-semibold mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                id="newAddressLine1"
                name="newAddressLine1"
                value={formData.newAddressLine1}
                onChange={handleChange}
                required
                className="border rounded p-2"
                placeholder="Street address, P.O. box, company name, c/o"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="newAddressLine2" className="font-semibold mb-1">
                Address Line 2 (Optional)
              </label>
              <input
                type="text"
                id="newAddressLine2"
                name="newAddressLine2"
                value={formData.newAddressLine2}
                onChange={handleChange}
                className="border rounded p-2"
                placeholder="Apartment, suite, unit, building, floor, etc."
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="newCity" className="font-semibold mb-1">
                City
              </label>
              <input
                type="text"
                id="newCity"
                name="newCity"
                value={formData.newCity}
                onChange={handleChange}
                required
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="newState" className="font-semibold mb-1">
                State / Province
              </label>
              <input
                type="text"
                id="newState"
                name="newState"
                value={formData.newState}
                onChange={handleChange}
                required
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="newZip" className="font-semibold mb-1">
                ZIP / Postal Code
              </label>
              <input
                type="text"
                id="newZip"
                name="newZip"
                value={formData.newZip}
                onChange={handleChange}
                className="border rounded p-2"
                required
              />
            </div>
          </>
        )}

        {/* Selected Storage Facility Dropdown - at the very end, unfiltered */}
        <div className="flex flex-col" style={{ gridColumn: "1 / -1" }}>
          <label
            htmlFor="selectedFacilityId"
            className="font-semibold mb-1"
          >
            Select Storage Facility
          </label>
          <select
            id="selectedFacilityId"
            name="selectedFacilityId"
            value={formData.selectedFacilityId}
            onChange={handleChange}
            required
            className="border rounded p-2"
          >
            <option value="">-- Select Facility --</option>
            {facilities.map((facility) => (
              <option key={facility.id} value={facility.id}>
                {facility.name} — {facility.address}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors"
          style={{ gridColumn: "1 / -1" }}
        >
          Submit Request
        </button>
      </form>
    </DashboardLayout>
  );
}
