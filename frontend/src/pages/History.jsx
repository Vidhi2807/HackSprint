import { motion } from 'framer-motion';
import { Clock, Search, Filter, Trash2 } from 'lucide-react';
import { Button, EmptyState } from '@/components/ui';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function History() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="page-container"
    >
      <motion.div variants={item} className="flex items-center justify-between">
        <div className="page-header">
          <h1 className="page-title">History</h1>
          <p className="page-subtitle">Your browsing and reading history analyzed by AI</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Filter size={18} />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 size={18} />
          </Button>
        </div>
      </motion.div>

      {/* Search */}
      <motion.div variants={item}>
        <div className="glass-input flex items-center gap-2">
          <Search size={16} className="text-surface-500" />
          <input
            type="text"
            placeholder="Search history..."
            className="bg-transparent border-none outline-none w-full text-surface-200 placeholder:text-surface-500 text-sm"
          />
        </div>
      </motion.div>

      <motion.div variants={item}>
        <EmptyState
          icon={Clock}
          title="No history yet"
          description="Your browsing history will appear here once you start using NeuroLens AI with the Chrome extension."
        />
      </motion.div>
    </motion.div>
  );
}
