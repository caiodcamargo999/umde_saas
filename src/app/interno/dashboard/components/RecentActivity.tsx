'use client';
import { MessageSquare, Briefcase, FileText, UserPlus, Building } from 'lucide-react';

const iconMap = {
  lead: <UserPlus className="w-5 h-5 text-blue-400" />,
  contract: <FileText className="w-5 h-5 text-green-400" />,
  agent: <Briefcase className="w-5 h-5 text-orange-400" />,
  investor: <UserPlus className="w-5 h-5 text-purple-400" />,
  property: <Building className="w-5 h-5 text-red-400" />,
  message: <MessageSquare className="w-5 h-5 text-teal-400" />,
};

interface Activity {
  id: number;
  type: string;
  message: string;
  user: string;
  time: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export const RecentActivity = ({ activities }: RecentActivityProps) => {
  return (
    <div className="bg-[#101C3A]/50 p-6 rounded-2xl border border-blue-500/20 h-full">
      <h3 className="text-lg font-semibold mb-4 text-white">Atividade Recente</h3>
      <div className="flex flex-col gap-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 bg-[#101C3A]/70 rounded-xl p-3">
            <div className="bg-gray-800 p-2 rounded-full">
              {iconMap[activity.type as keyof typeof iconMap] || <Briefcase className="w-5 h-5 text-gray-400" />}
            </div>
            <div className="flex-1">
              <p className="text-sm text-white/90">{activity.message}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-white/50">{activity.user}</span>
                <span className="text-xs text-white/50">•</span>
                <span className="text-xs text-white/50">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
