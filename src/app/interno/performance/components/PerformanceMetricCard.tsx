'use client';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface PerformanceMetricCardProps {
  title: string;
  value: string;
  description: string;
  change?: string;
  color?: "blue" | "green" | "orange" | "red";
}

export const PerformanceMetricCard = ({ title, value, description, change, color = "blue" }: PerformanceMetricCardProps) => {
  const isPositive = change && change.startsWith('+');
  const colorClasses = {
    blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    green: "bg-green-500/10 border-green-500/30 text-green-400",
    orange: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    red: "bg-red-500/10 border-red-500/30 text-red-400"
  };

  return (
    <div className={`p-6 rounded-2xl border ${colorClasses[color]} transition-all hover:shadow-lg hover:shadow-current/20 hover:-translate-y-1`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm text-white/70 font-medium">{title}</h3>
        {change && (
          <span className={`flex items-center text-xs font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {change}
          </span>
        )}
      </div>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-white/50">{description}</p>
    </div>
  );
};
