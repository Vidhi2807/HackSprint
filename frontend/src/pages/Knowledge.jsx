import { motion } from 'framer-motion';
import { Brain, Plus, Search, Network } from 'lucide-react';
import { Button, EmptyState } from '@/components/ui';
import { KnowledgeCard } from '@/components';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Knowledge() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="page-container"
    >
      <motion.div variants={item} className="flex items-center justify-between">
        <div className="page-header">
          <h1 className="page-title">Knowledge Base</h1>
          <p className="page-subtitle">Your personal knowledge graph built from browsing insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">
            <Network size={16} /> Graph View
          </Button>
          <Button variant="primary">
            <Plus size={16} /> Add Node
          </Button>
        </div>
      </motion.div>

      {/* Search */}
      <motion.div variants={item}>
        <div className="glass-input flex items-center gap-2">
          <Search size={16} className="text-surface-500" />
          <input
            type="text"
            placeholder="Search knowledge base..."
            className="bg-transparent border-none outline-none w-full text-surface-200 placeholder:text-surface-500 text-sm"
          />
        </div>
      </motion.div>

      <motion.div variants={item}>
        <EmptyState
          icon={Brain}
          title="Knowledge base is empty"
          description="As you browse and chat with NeuroLens AI, knowledge nodes will be automatically created and connected."
          action={
            <Button variant="outline">
              <Plus size={14} /> Create First Node
            </Button>
          }
        />
      </motion.div>
    </motion.div>
  );
}
