import React, { ReactNode } from "react";

type WidgetProps = {
  title: string;
  value?: string;
  children?: ReactNode;
};

export default function Widget({ title, value, children }: WidgetProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      {value ? (
        <p className="text-2xl font-bold">{value}</p>
      ) : (
        <div className="mt-2 text-base font-medium">{children}</div>
      )}
    </div>
  );
}
