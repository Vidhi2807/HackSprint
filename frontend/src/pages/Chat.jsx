import { motion } from 'framer-motion';
import { Plus, Search, MessageSquare } from 'lucide-react';
import { ChatPanel, VoiceButton } from '@/components';
import { Button } from '@/components/ui';

export default function Chat() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-[calc(100vh-4rem)]"
    >
      {/* Conversations Sidebar */}
      <div className="hidden md:flex flex-col w-72 border-r border-surface-700/20 bg-surface-900/30">
        <div className="p-4 border-b border-surface-700/20">
          <Button variant="primary" className="w-full">
            <Plus size={16} /> New Chat
          </Button>
        </div>

        <div className="p-3">
          <div className="glass-input flex items-center gap-2 text-sm">
            <Search size={14} className="text-surface-500" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="bg-transparent border-none outline-none w-full text-surface-200 placeholder:text-surface-500 text-sm"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="sidebar-link active">
            <MessageSquare size={16} />
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">Welcome conversation</p>
              <p className="text-xs text-surface-500 truncate">Just now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="glass-navbar px-4 h-14 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-sm font-semibold text-white">Welcome conversation</h2>
            <p className="text-xs text-surface-500">1 message</p>
          </div>
          <VoiceButton />
        </div>

        {/* Chat Panel */}
        <ChatPanel className="flex-1" />
      </div>
    </motion.div>
  );
}
