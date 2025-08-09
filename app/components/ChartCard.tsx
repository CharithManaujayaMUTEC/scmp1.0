"use client";

import React, { useState, useEffect } from "react";
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
  LabelProps,
} from "recharts";

// Define proper types for chart data
interface ChartDataItem {
  month?: string;
  name?: string;
  value?: number;
  [key: string]: string | number | undefined;
}

interface ChartCardProps {
  title: string;
  dataKeys: string[];
  data: ChartDataItem[];
  type?: "line" | "area" | "pie" | "bar";
  color?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  dropdownOptions?: string[];
  selectedItems?: string[];
  onSelectionChange?: (items: string[]) => void;
  timeframe?: "weekly" | "monthly" | "annually";
  setTimeframe?: (timeframe: "weekly" | "monthly" | "annually") => void;
}

// Define proper type for pie label props
interface PieLabelProps extends LabelProps {
  name?: string;
  percent?: number;
}

const COLORS = ['#7ed957', '#ff914d', '#0097b2', '#ffde59', '#8b5cf6', '#ef4444'];

// Mobile-optimized Pie label render function
const renderPieLabel = (props: PieLabelProps, isMobile: boolean): string => {
  const { name, percent } = props;
  const displayPercent = percent ? (percent * 100).toFixed(0) : '0';
  
  // For mobile, show shorter labels
  if (isMobile) {
    return `${displayPercent}%`;
  }
  
  return `${name || 'Unknown'} ${displayPercent}%`;
};

const ChartCard = ({
  title,
  dataKeys,
  data,
  type = "line",
  height = 250,
  showGrid = true,
  showLegend = false,
  dropdownOptions = [],
  selectedItems = [],
  onSelectionChange,
  timeframe = "monthly",
  setTimeframe,
}: ChartCardProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Handle responsive state
  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive height based on screen size
  const getResponsiveHeight = () => {
    if (isMobile) return Math.max(200, height - 50); // Mobile
    if (isTablet) return Math.max(220, height - 30); // Tablet
    return height; // Desktop
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
    const chartMargin = { 
      top: 10, 
      right: isMobile ? 10 : 30, 
      left: isMobile ? 0 : 20, 
      bottom: 0 
    };

    const tickStyle = { 
      fontSize: isMobile ? 10 : 12, 
      fill: '#6b7280' 
    };

    const tooltipStyle = {
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      fontSize: isMobile ? '12px' : '14px'
    };

    switch (type) {
      case "area":
        return (
          <AreaChart data={data} margin={chartMargin}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={tickStyle}
              interval={isMobile ? 1 : 0}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={tickStyle}
              width={isMobile ? 30 : 60}
            />
            {showGrid && (
              <Tooltip
                contentStyle={tooltipStyle}
              />
            )}
            {showLegend && !isMobile && <Legend />}
            {filteredKeys.map((key, idx) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stroke={COLORS[idx % COLORS.length]}
                fill={`${COLORS[idx % COLORS.length]}20`}
                strokeWidth={isMobile ? 2 : 3}
                dot={{ r: isMobile ? 3 : 4, fill: COLORS[idx % COLORS.length] }}
                activeDot={{ r: isMobile ? 4 : 6, fill: COLORS[idx % COLORS.length] }}
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
              outerRadius={isMobile ? 60 : 80}
              innerRadius={isMobile ? 20 : 30}
              paddingAngle={2}
              dataKey="value"
              label={!isMobile ? (props) => renderPieLabel(props as PieLabelProps, isMobile) : false}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} />
            {showLegend && (
              <Legend 
                wrapperStyle={{ fontSize: isMobile ? '12px' : '14px' }}
              />
            )}
          </PieChart>
        );

      case "bar":
        return (
          <BarChart data={data} margin={chartMargin}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={tickStyle}
              interval={isMobile ? 1 : 0}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={tickStyle}
              width={isMobile ? 30 : 60}
            />
            <Tooltip contentStyle={tooltipStyle} />
            {showLegend && !isMobile && <Legend />}
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
          <LineChart data={data} margin={chartMargin}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={tickStyle}
              interval={isMobile ? 1 : 0}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={tickStyle}
              width={isMobile ? 30 : 60}
            />
            <Tooltip contentStyle={tooltipStyle} />
            {showLegend && !isMobile && <Legend />}
            {filteredKeys.map((key, idx) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={COLORS[idx % COLORS.length]}
                strokeWidth={isMobile ? 2 : 3}
                dot={{ 
                  r: isMobile ? 3 : 4, 
                  fill: COLORS[idx % COLORS.length], 
                  strokeWidth: 2, 
                  stroke: '#fff' 
                }}
                activeDot={{ 
                  r: isMobile ? 4 : 6, 
                  fill: COLORS[idx % COLORS.length], 
                  strokeWidth: 2, 
                  stroke: '#fff' 
                }}
              />
            ))}
          </LineChart>
        );
    }
  };

  // Don't render until client-side
  if (!isClient) {
    return (
      <div className="bg-white p-3 sm:p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-base sm:text-lg font-semibold text-black">{title}</h3>
        <div className="w-full h-[250px] flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-gray-400">Loading chart...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-3 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      {/* Responsive Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
        <h3 className="text-base sm:text-lg font-semibold text-black">{title}</h3>

        {/* Controls Container */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
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
                className="border border-gray-300 rounded px-2 py-1 text-sm w-full sm:w-auto"
                title="Select timeframe"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="annually">Annually</option>
              </select>
            </>
          )}
        </div>
      </div>

      {/* Dropdown multi-select for keys */}
      {dropdownOptions.length > 0 && onSelectionChange && (
        <div className="mb-4">
          <label htmlFor="data-keys-select" className="block mb-2 font-medium text-black text-sm">
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
            size={Math.min(isMobile ? 3 : 5, dropdownOptions.length)}
            title="Select data keys"
          >
            {dropdownOptions.filter(opt => opt !== "All").map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple items</p>
        </div>
      )}

      {/* Responsive Chart Container */}
      <div className="w-full overflow-x-auto">
        <ResponsiveContainer width="100%" height={getResponsiveHeight()}>
          {renderChart()}
        </ResponsiveContainer>
      </div>

      {/* Mobile Legend (for pie charts when legend is hidden) */}
      {type === "pie" && !showLegend && isMobile && (
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          {data.map((entry, index) => (
            <div key={entry.name} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span className="truncate">{entry.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChartCard;