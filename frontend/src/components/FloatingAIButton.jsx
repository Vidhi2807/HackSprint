import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { cn } from '@/utils';

export default function FloatingAIButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-72 glass rounded-2xl p-4 mb-2"
          >
            <p className="text-sm text-surface-300 mb-3">
              Ask me anything about your current page...
            </p>
            <div className="glass-input flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a question..."
                className="bg-transparent border-none outline-none text-sm w-full text-surface-200 placeholder:text-surface-500"
              />
              <Sparkles size={16} className="text-primary-400 shrink-0" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center shadow-glow',
          'bg-gradient-to-br from-primary-500 to-accent-violet',
          'hover:shadow-glow-lg transition-shadow duration-300'
        )}
      >
        {isExpanded ? (
          <X size={22} className="text-white" />
        ) : (
          <Sparkles size={22} className="text-white" />
        )}
      </motion.button>
    </div>
  );
}
