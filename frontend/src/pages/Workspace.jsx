import { motion } from 'framer-motion';
import { FolderKanban, Plus, MoreHorizontal } from 'lucide-react';
import { Button, Card, EmptyState } from '@/components/ui';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Workspace() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="page-container"
    >
      <motion.div variants={item} className="flex items-center justify-between">
        <div className="page-header">
          <h1 className="page-title">Workspace</h1>
          <p className="page-subtitle">Organize your research and browsing projects</p>
        </div>
        <Button variant="primary">
          <Plus size={16} /> New Workspace
        </Button>
      </motion.div>

      <motion.div variants={item}>
        <EmptyState
          icon={FolderKanban}
          title="No workspaces yet"
          description="Create a workspace to organize your research, bookmarks, and AI conversations by topic."
          action={
            <Button variant="outline">
              <Plus size={14} /> Create Workspace
            </Button>
          }
        />
      </motion.div>
    </motion.div>
  );
}
