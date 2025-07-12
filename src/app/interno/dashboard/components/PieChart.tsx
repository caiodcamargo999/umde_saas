'use client';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieChartData[];
  title: string;
}

export const PieChart = ({ data, title }: PieChartProps) => {
  return (
    <div className="bg-[#101C3A]/50 p-6 rounded-2xl border border-blue-500/20">
      <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsPieChart>
          <Tooltip
            contentStyle={{ 
              backgroundColor: '#101C3A', 
              borderColor: '#0D4FF7', 
              color: '#FFFFFF' 
            }}
          />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};
