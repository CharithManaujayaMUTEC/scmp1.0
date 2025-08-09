"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartCardProps {
  title: string;
  data: any[]; // array of data points, each with a label (month/week/year) and keys
  dataKeys: string[]; // keys to plot as lines
  dropdownOptions: string[]; // options to select from, like crop names or vendors
  selectedItems: string[]; // currently selected items
  onSelectionChange: (items: string[]) => void;
  timeframe: "weekly" | "monthly" | "annually";
  setTimeframe: (tf: "weekly" | "monthly" | "annually") => void;
}

const COLORS = ["#7ed957", "#4a90e2", "#f5a623", "#d0021b", "#9013fe", "#50e3c2"];

export default function ChartCard({
  title,
  data,
  dataKeys,
  dropdownOptions,
  selectedItems,
  onSelectionChange,
  timeframe,
  setTimeframe,
}: ChartCardProps) {
  // Handle dropdown change for items (multi-select simulation)
  const toggleItem = (item: string) => {
    if (item === "All") {
      onSelectionChange(["All"]);
    } else {
      let newSelection = [...selectedItems];
      if (selectedItems.includes("All")) {
        // if All was selected, deselect All first
        newSelection = [];
      }
      if (newSelection.includes(item)) {
        newSelection = newSelection.filter((i) => i !== item);
      } else {
        newSelection.push(item);
      }
      // If none selected, default to All
      if (newSelection.length === 0) {
        newSelection = ["All"];
      }
      onSelectionChange(newSelection);
    }
  };

  // Handle timeframe change
  const handleTimeframeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as "weekly" | "monthly" | "annually";
    setTimeframe(val);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="mb-4 font-semibold">{title}</h3>

      {/* Dropdown for items */}
      <div className="mb-2 flex flex-wrap gap-2">
        {dropdownOptions.map((option) => (
          <button
            key={option}
            onClick={() => toggleItem(option)}
            className={`px-3 py-1 rounded-full border ${
              selectedItems.includes(option)
                ? "bg-green-500 text-white border-green-500"
                : "bg-white text-gray-700 border-gray-300"
            } hover:bg-green-400 hover:text-white transition`}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>

      {/* Dropdown for timeframe */}
      <div className="mb-4">
        <label htmlFor="timeframe" className="mr-2 font-medium">
          Timeframe:
        </label>
        <select
          id="timeframe"
          value={timeframe}
          onChange={handleTimeframeChange}
          className="border rounded p-1"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>
        </select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((key, idx) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={COLORS[idx % COLORS.length]}
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
