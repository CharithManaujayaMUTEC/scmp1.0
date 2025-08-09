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
    sm: "p-3 sm:p-4",
    md: "p-4 sm:p-6", 
    lg: "p-6 sm:p-8"
  };

  const valueSizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl"
  };

  const iconSizes = {
    sm: "w-8 h-8 sm:w-10 sm:h-10",
    md: "w-12 h-12 sm:w-14 sm:h-14",
    lg: "w-14 h-14 sm:w-16 sm:h-16"
  };

  const iconInnerSizes = {
    sm: "w-4 h-4 sm:w-5 sm:h-5",
    md: "w-6 h-6 sm:w-7 sm:h-7",
    lg: "w-7 h-7 sm:w-8 sm:h-8"
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
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-6 sm:h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-2 sm:h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className={`${iconSizes[size]} bg-gray-200 rounded-xl`}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white ${sizeClasses[size]} rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 group`}>
      {/* Mobile-first responsive layout */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2 sm:mb-1">
            <h3 className="text-black text-xs sm:text-sm font-medium uppercase tracking-wider flex-1 min-w-0">
              {title}
            </h3>
            {change && (
              <div className={`flex items-center text-xs ${getTrendColor()} ml-2 flex-shrink-0`}>
                <TrendIcon className="w-3 h-3 mr-1" />
                <span className="font-medium hidden sm:inline">
                  {trend === 'down' ? '' : '+'}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between sm:block">
            <p className={`${valueSizes[size]} font-bold text-black-900 mb-1 group-hover:text-black transition-colors`}>
              {value}
            </p>
            
            {/* Mobile icon - shown inline with value on mobile */}
            {Icon && (
              <div className={`${iconSizes[size]} ${color} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 sm:hidden flex-shrink-0 ml-3`}>
                <Icon className={`${iconInnerSizes[size]} text-white`} />
              </div>
            )}
          </div>
          
          {(change || subtitle) && (
            <div className="space-y-1">
              {change && (
                <div className={`flex items-center text-xs sm:text-sm ${getTrendColor()}`}>
                  <TrendIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="font-medium">
                    {change}
                  </span>
                </div>
              )}
              {subtitle && (
                <p className="text-xs text-black">{subtitle}</p>
              )}
            </div>
          )}
        </div>
        
        {/* Desktop icon - hidden on mobile, shown on desktop */}
        {Icon && (
          <div className={`${iconSizes[size]} ${color} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 hidden sm:flex flex-shrink-0`}>
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

// Mobile-optimized compact widget
export const CompactWidget = ({ title, value, icon, color }: {
  title: string;
  value: string;
  icon?: LucideIcon;
  color?: string;
}) => (
  <Widget
    title={title}
    value={value}
    icon={icon}
    color={color || "bg-gradient-to-br from-gray-500 to-gray-600"}
    size="sm"
  />
);

export default Widget;