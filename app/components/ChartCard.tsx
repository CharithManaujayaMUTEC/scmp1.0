"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

interface ChartCardProps {
  title: string;
  dataKeys: string[];           // multiple keys to display
  data: any[];
  type?: "line" | "area" | "pie" | "bar";
  color?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;

  dropdownOptions?: string[];   // for filtering keys
  selectedItems?: string[];
  onSelectionChange?: (items: string[]) => void;

  timeframe?: "weekly" | "monthly" | "annually";
  setTimeframe?: (timeframe: "weekly" | "monthly" | "annually") => void;
}

const COLORS = ['#7ed957', '#ff914d', '#0097b2', '#ffde59', '#8b5cf6', '#ef4444'];

const ChartCard = ({
  title,
  dataKeys,
  data,
  type = "line",
  color = "#7ed957",
  height = 250,
  showGrid = true,
  showLegend = false,
  dropdownOptions = [],
  selectedItems = [],
  onSelectionChange,
  timeframe = "monthly",
  setTimeframe,
}: ChartCardProps) => {

  // Handle dropdown filter changes
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (!onSelectionChange) return;

    if (value === "All") {
      onSelectionChange(dropdownOptions.filter(opt => opt !== "All"));
    } else {
      // Toggle selection of the clicked item
      if (selectedItems.includes(value)) {
        onSelectionChange(selectedItems.filter(i => i !== value));
      } else {
        onSelectionChange([...selectedItems, value]);
      }
    }
  };

  // Handle timeframe changes
  const handleTimeframeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!setTimeframe) return;
    setTimeframe(event.target.value as "weekly" | "monthly" | "annually");
  };

  // If no selectedItems or includes "All", show all dropdown options except "All"
  const activeKeys = selectedItems.length === 0 || selectedItems.includes("All")
    ? dropdownOptions.filter(opt => opt !== "All")
    : selectedItems;

  // Filter dataKeys to only those selected and present in dataKeys prop
  const filteredKeys = dataKeys.filter(k => activeKeys.includes(k));

  const renderChart = () => {
    switch (type) {
      case "area":
        return (
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            {showGrid && (
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            )}
            {showLegend && <Legend />}
            {filteredKeys.map((key, idx) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stroke={COLORS[idx % COLORS.length]}
                fill={`${COLORS[idx % COLORS.length]}20`}
                strokeWidth={3}
                dot={{ r: 4, fill: COLORS[idx % COLORS.length] }}
                activeDot={{ r: 6, fill: COLORS[idx % COLORS.length] }}
              />
            ))}
          </AreaChart>
        );

      case "pie":
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={30}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }: { name: string; percent: number }) =>
                `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            {showLegend && <Legend />}
          </PieChart>
        );

      case "bar":
        return (
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            {showLegend && <Legend />}
            {filteredKeys.map((key, idx) => (
              <Bar
                key={key}
                dataKey={key}
                fill={COLORS[idx % COLORS.length]}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        );

      default: // line chart
        return (
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            {showLegend && <Legend />}
            {filteredKeys.map((key, idx) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={COLORS[idx % COLORS.length]}
                strokeWidth={3}
                dot={{ r: 4, fill: COLORS[idx % COLORS.length], strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6, fill: COLORS[idx % COLORS.length], strokeWidth: 2, stroke: '#fff' }}
              />
            ))}
          </LineChart>
        );
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-4 space-x-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        {/* Timeframe selector */}
        {setTimeframe && (
          <>
            <label htmlFor="timeframe-select" className="sr-only">
              Select Timeframe
            </label>
            <select
              id="timeframe-select"
              value={timeframe}
              onChange={handleTimeframeChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              title="Select timeframe"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="annually">Annually</option>
            </select>
          </>
        )}
      </div>

      {/* Dropdown multi-select for keys */}
      {dropdownOptions.length > 0 && onSelectionChange && (
        <div className="mb-4">
          <label htmlFor="data-keys-select" className="block mb-1 font-medium text-gray-700">
            Select Data
          </label>
          <select
            id="data-keys-select"
            multiple
            value={activeKeys}
            onChange={(e) => {
              const options = e.target.options;
              const selected: string[] = [];
              for (let i = 0; i < options.length; i++) {
                if (options[i].selected) selected.push(options[i].value);
              }
              onSelectionChange(selected);
            }}
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            size={Math.min(5, dropdownOptions.length)}
            title="Select data keys"
          >
            {dropdownOptions.filter(opt => opt !== "All").map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}

      <ResponsiveContainer width="100%" height={height}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
