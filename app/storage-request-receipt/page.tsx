"use client";

import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import QRCode from "react-qr-code";
import { useSearchParams, useRouter } from "next/navigation";
export const dynamic = 'force-dynamic'

type ReceiptData = {
  requestId: string;
  farmerName?: string; // optional because not from form
  farmerId: string;
  cropType: string;
  deliveryDate: string;
  cropQuality: string;
  temperatureType: string;
  quantity: string;
  notes?: string;
  status: "Approved" | "On Hold";
};

export default function StorageRequestReceipt() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const requestId = searchParams.get("requestId");

  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);

  useEffect(() => {
    if (!requestId) {
      // If no requestId in URL, redirect to storage request page
      router.push("/request-storage");
      return;
    }

    // Simulate fetching receipt data by requestId
    const fetchReceiptData = async () => {
      // Dummy data aligned with form fields
      const data: ReceiptData = {
        requestId,
        farmerId: "FARM-10045", // fixed dummy id from your form
        cropType: "Corn",
        deliveryDate: "2025-08-15",
        cropQuality: "Grade A",
        temperatureType: "Cold",
        quantity: "500 kg",
        notes: "Handle with care",
        status: "Approved", // or "On Hold"
      };
      setReceiptData(data);
    };

    fetchReceiptData();
  }, [requestId, router]);

  if (!receiptData) {
    return (
      <DashboardLayout menuItems={[]}>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 text-center">
          Loading receipt...
        </div>
      </DashboardLayout>
    );
  }

  const qrData = JSON.stringify({
    requestId: receiptData.requestId,
    farmerId: receiptData.farmerId,
    cropType: receiptData.cropType,
    deliveryDate: receiptData.deliveryDate,
    status: receiptData.status,
  });

  return (
    <DashboardLayout
      menuItems={[
        { label: "Farm Analytics", link: "#" },
        { label: "Storage Requests", link: "#" },
        { label: "E-Market", link: "#" },
        { label: "Hotline", link: "#" },
        { label: "Agri Tech Links", link: "#" },
        { label: "Delivery Service Requests", link: "#" },
      ]}
    >
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 space-y-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center">Storage Request Receipt</h1>

        {/* Status */}
        <div
          className={`text-center text-lg font-semibold p-2 rounded ${
            receiptData.status === "Approved"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {receiptData.status === "Approved" ? "✅ Approved" : "⏳ On Hold"}
        </div>

        {/* Details */}
        <div className="space-y-2">
          <p>
            <strong>Request ID:</strong> {receiptData.requestId}
          </p>
          {receiptData.farmerName && (
            <p>
              <strong>Farmer Name:</strong> {receiptData.farmerName}
            </p>
          )}
          <p>
            <strong>Farmer ID:</strong> {receiptData.farmerId}
          </p>
          <p>
            <strong>Crop Type:</strong> {receiptData.cropType}
          </p>
          <p>
            <strong>Delivery Date:</strong> {receiptData.deliveryDate}
          </p>
          <p>
            <strong>Crop Quality:</strong> {receiptData.cropQuality}
          </p>
          <p>
            <strong>Temperature Type:</strong> {receiptData.temperatureType}
          </p>
          <p>
            <strong>Quantity:</strong> {receiptData.quantity}
          </p>
          {receiptData.notes && (
            <p>
              <strong>Notes:</strong> {receiptData.notes}
            </p>
          )}
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center space-y-2">
          <QRCode value={qrData} size={150} />
          <p className="text-sm text-black">
            Show this QR code at the storage facility gate
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/delivery-service")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            🚚 Call Delivery Service
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
