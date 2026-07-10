import { motion } from 'framer-motion';
import { Bookmark, Plus, Search, Grid3X3, List } from 'lucide-react';
import { Button, EmptyState } from '@/components/ui';
import { useState } from 'react';
import { cn } from '@/utils';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Bookmarks() {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="page-container"
    >
      <motion.div variants={item} className="flex items-center justify-between">
        <div className="page-header">
          <h1 className="page-title">Bookmarks</h1>
          <p className="page-subtitle">Save and organize your favorite pages and resources</p>
        </div>
        <Button variant="primary">
          <Plus size={16} /> Add Bookmark
        </Button>
      </motion.div>

      {/* Controls */}
      <motion.div variants={item} className="flex items-center gap-3">
        <div className="glass-input flex items-center gap-2 flex-1">
          <Search size={16} className="text-surface-500" />
          <input
            type="text"
            placeholder="Search bookmarks..."
            className="bg-transparent border-none outline-none w-full text-surface-200 placeholder:text-surface-500 text-sm"
          />
        </div>
        <div className="flex glass rounded-xl overflow-hidden">
          <button
            onClick={() => setViewMode('grid')}
            className={cn(
              'p-2 transition-colors',
              viewMode === 'grid' ? 'bg-primary-500/20 text-primary-400' : 'text-surface-500 hover:text-surface-300'
            )}
          >
            <Grid3X3 size={16} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={cn(
              'p-2 transition-colors',
              viewMode === 'list' ? 'bg-primary-500/20 text-primary-400' : 'text-surface-500 hover:text-surface-300'
            )}
          >
            <List size={16} />
          </button>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <EmptyState
          icon={Bookmark}
          title="No bookmarks yet"
          description="Bookmark pages while browsing with the NeuroLens extension to save them here."
          action={
            <Button variant="outline">
              <Plus size={14} /> Add Your First Bookmark
            </Button>
          }
        />
      </motion.div>
    </motion.div>
  );
}
