'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface ChartData {
  name: string;
  [key: string]: string | number;
}

interface PerformanceChartProps {
  data: ChartData[];
  title: string;
  type?: "line" | "bar";
  dataKey: string;
  strokeColor?: string;
}

export const PerformanceChart = ({ data, title, type = "line", dataKey, strokeColor = "#0D4FF7" }: PerformanceChartProps) => {
  return (
    <div className="bg-[#101C3A]/50 p-6 rounded-2xl border border-blue-500/20">
      <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        {type === "line" ? (
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.5)" fontSize={12} />
            <YAxis stroke="rgba(255, 255, 255, 0.5)" fontSize={12} />
            <Tooltip
              contentStyle={{ 
                backgroundColor: '#101C3A', 
                borderColor: '#0D4FF7', 
                color: '#FFFFFF' 
              }}
              cursor={{ stroke: 'rgba(13, 79, 247, 0.3)', strokeWidth: 2 }}
            />
            <Line type="monotone" dataKey={dataKey} stroke={strokeColor} strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        ) : (
          <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.5)" fontSize={12} />
            <YAxis stroke="rgba(255, 255, 255, 0.5)" fontSize={12} />
            <Tooltip
              contentStyle={{ 
                backgroundColor: '#101C3A', 
                borderColor: '#0D4FF7', 
                color: '#FFFFFF' 
              }}
              cursor={{ fill: 'rgba(13, 79, 247, 0.1)' }}
            />
            <Bar dataKey={dataKey} fill={strokeColor} radius={[4, 4, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};
