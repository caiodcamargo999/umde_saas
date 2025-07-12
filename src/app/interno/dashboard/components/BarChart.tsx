'use client';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
  label: string;
  value: number;
}

interface BarChartProps {
  data: ChartData[];
  title: string;
  color?: string;
}

export const BarChart = ({ data, title, color = "#0D4FF7" }: BarChartProps) => {
  return (
    <div className="bg-[#101C3A]/50 p-6 rounded-2xl border border-blue-500/20">
      <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
          <XAxis dataKey="label" stroke="rgba(255, 255, 255, 0.5)" fontSize={12} />
          <YAxis stroke="rgba(255, 255, 255, 0.5)" fontSize={12} />
          <Tooltip
            contentStyle={{ 
              backgroundColor: '#101C3A', 
              borderColor: '#0D4FF7', 
              color: '#FFFFFF' 
            }}
            cursor={{ fill: 'rgba(13, 79, 247, 0.1)' }}
          />
          <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};
