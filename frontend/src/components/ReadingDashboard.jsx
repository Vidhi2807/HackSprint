import { BookOpen, Clock, BarChart3 } from 'lucide-react';
import Card from '@/components/ui/Card';

const stats = [
  { label: 'Articles Read', value: '0', icon: BookOpen, color: 'text-primary-400' },
  { label: 'Reading Time', value: '0h', icon: Clock, color: 'text-accent-emerald' },
  { label: 'Words Processed', value: '0', icon: BarChart3, color: 'text-accent-amber' },
];

export default function ReadingDashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} hover>
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl bg-surface-800/50 ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-surface-500">{stat.label}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
