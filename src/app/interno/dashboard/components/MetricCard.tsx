'use client';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const MetricCard = ({ title, value, change, icon, color = "blue" }: {
  title: string;
  value: string;
  change?: string;
  icon: React.ReactNode;
  color?: "blue" | "green" | "orange" | "red";
}) => {
  const colorClasses = {
    blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    green: "bg-green-500/10 border-green-500/30 text-green-400",
    orange: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    red: "bg-red-500/10 border-red-500/30 text-red-400"
  };

  const isPositive = change && change.startsWith('+');

  return (
    <div className={`p-6 rounded-2xl border ${colorClasses[color]} transition-all hover:shadow-lg hover:shadow-current/20 hover:-translate-y-1`}>
      <div className="flex items-start justify-between">
        <div className={`p-2 bg-current/20 rounded-lg`}>{icon}</div>
        {change && (
          <div className={`flex items-center text-sm font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
            <span>{change.substring(1)}</span>
          </div>
        )}
      </div>
      <h3 className="text-3xl font-bold mt-4 mb-1 text-white">{value}</h3>
      <p className="text-sm text-white/70">{title}</p>
    </div>
  );
};
