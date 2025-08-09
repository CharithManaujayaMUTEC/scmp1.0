"use client";

import { TrendingUp, TrendingDown } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface WidgetProps {
  title: string;
  value: string;
  icon?: LucideIcon;
  color?: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Widget = ({ 
  title, 
  value, 
  icon: Icon, 
  color = "bg-blue-500", 
  change = "", 
  trend = "up",
  subtitle = "",
  size = "md",
  loading = false
}: WidgetProps) => {
  
  const sizeClasses = {
    sm: "p-4",
    md: "p-6", 
    lg: "p-8"
  };

  const valueSizes = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl"
  };

  const iconSizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-16 h-16"
  };

  const iconInnerSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-8 h-8"
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-black';
    }
  };

  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;

  if (loading) {
    return (
      <div className={`bg-white ${sizeClasses[size]} rounded-xl shadow-sm border border-gray-100`}>
        <div className="animate-pulse">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className={`${iconSizes[size]} bg-gray-200 rounded-xl`}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white ${sizeClasses[size]} rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 group`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-black text-sm font-medium uppercase tracking-wider">
              {title}
            </h3>
            {change && (
              <div className={`flex items-center text-xs ${getTrendColor()}`}>
                <TrendIcon className="w-3 h-3 mr-1" />
                <span className="font-medium">{trend === 'down' ? '' : '+'}</span>
              </div>
            )}
          </div>
          
          <p className={`${valueSizes[size]} font-bold text-black-900 mb-1 group-hover:text-black transition-colors`}>
            {value}
          </p>
          
          {(change || subtitle) && (
            <div className="space-y-1">
              {change && (
                <div className={`flex items-center text-sm ${getTrendColor()}`}>
                  <TrendIcon className="w-4 h-4 mr-1" />
                  <span className="font-medium">{change}</span>
                </div>
              )}
              {subtitle && (
                <p className="text-xs text-black">{subtitle}</p>
              )}
            </div>
          )}
        </div>
        
        {Icon && (
          <div className={`${iconSizes[size]} ${color} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
            <Icon className={`${iconInnerSizes[size]} text-white`} />
          </div>
        )}
      </div>
    </div>
  );
};

// Pre-configured widget variants for common use cases
export const StatWidget = ({ title, value, change, trend }: { 
  title: string; 
  value: string; 
  change?: string; 
  trend?: 'up' | 'down' | 'neutral' 
}) => (
  <Widget 
    title={title}
    value={value}
    change={change}
    trend={trend}
    color="bg-gradient-to-br from-blue-500 to-blue-600"
  />
);

export const MetricWidget = ({ title, value, subtitle, color }: {
  title: string;
  value: string; 
  subtitle?: string;
  color?: string;
}) => (
  <Widget
    title={title}
    value={value}
    subtitle={subtitle}
    color={color || "bg-gradient-to-br from-green-500 to-green-600"}
    size="sm"
  />
);

export default Widget;