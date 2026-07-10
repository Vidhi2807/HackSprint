import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Clock, Eye, Brain, Globe } from 'lucide-react';
import Card from '@/components/ui/Card';

const stats = [
  { label: 'Pages Analyzed', value: '0', icon: Eye, change: '+0%', color: 'text-primary-400' },
  { label: 'AI Conversations', value: '0', icon: Brain, change: '+0%', color: 'text-accent-violet' },
  { label: 'Time Saved', value: '0h', icon: Clock, change: '+0%', color: 'text-accent-emerald' },
  { label: 'Sites Visited', value: '0', icon: Globe, change: '+0%', color: 'text-accent-amber' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Analytics() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="page-container"
    >
      <motion.div variants={item} className="page-header">
        <h1 className="page-title">Analytics</h1>
        <p className="page-subtitle">Insights into your browsing patterns and AI usage</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-surface-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
              <div className={`p-2 rounded-xl bg-surface-800/50 ${stat.color}`}>
                <stat.icon size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs text-surface-500">
              <TrendingUp size={12} />
              <span>{stat.change} from last week</span>
            </div>
          </Card>
        ))}
      </motion.div>

      {/* Charts Placeholder */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <Card.Header>
            <Card.Title>Activity Overview</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="h-48 flex items-center justify-center border border-dashed border-surface-700/30 rounded-xl">
              <div className="text-center">
                <BarChart3 size={32} className="text-surface-600 mx-auto mb-2" />
                <p className="text-sm text-surface-500">Chart will appear here</p>
              </div>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>AI Usage Trends</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="h-48 flex items-center justify-center border border-dashed border-surface-700/30 rounded-xl">
              <div className="text-center">
                <TrendingUp size={32} className="text-surface-600 mx-auto mb-2" />
                <p className="text-sm text-surface-500">Trends will appear here</p>
              </div>
            </div>
          </Card.Content>
        </Card>
      </motion.div>
    </motion.div>
  );
}
