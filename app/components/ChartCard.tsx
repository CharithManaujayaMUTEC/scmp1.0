"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockData = [
  { month: "Jan", yield: 4000, orders: 24 },
  { month: "Feb", yield: 3000, orders: 18 },
  { month: "Mar", yield: 5000, orders: 30 }
];

export default function ChartCard({ title, dataKey }: { title: string; dataKey: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="mb-4 font-semibold">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={mockData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#7ed957" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
