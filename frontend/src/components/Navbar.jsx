import { Search, Bell, Sparkles, Menu } from 'lucide-react';
import { useSidebarStore } from '@/store';
import { cn } from '@/utils';

export default function Navbar() {
  const { toggle } = useSidebarStore();

  return (
    <nav className="glass-navbar sticky top-0 z-40 px-4 lg:px-6 h-16 flex items-center justify-between gap-4">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="lg:hidden p-2 rounded-xl hover:bg-surface-800/50 text-surface-400 hover:text-white transition-colors"
        >
          <Menu size={20} />
        </button>

        {/* Search */}
        <div className="hidden sm:flex items-center gap-2 glass-input w-64 lg:w-80">
          <Search size={16} className="text-surface-500 shrink-0" />
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-transparent border-none outline-none text-sm w-full text-surface-200 placeholder:text-surface-500"
          />
          <kbd className="hidden lg:inline-flex text-[10px] text-surface-500 bg-surface-700/50 px-1.5 py-0.5 rounded font-mono">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <button className="glass-button p-2 rounded-xl relative">
          <Bell size={18} className="text-surface-400" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary-500 rounded-full" />
        </button>

        <button className="glass-button p-2 rounded-xl">
          <Sparkles size={18} className="text-primary-400" />
        </button>

        {/* Avatar */}
        <button className="flex items-center gap-2 glass-button rounded-xl pl-2 pr-3 py-1.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center">
            <span className="text-xs font-bold text-white">N</span>
          </div>
          <span className="hidden md:block text-sm font-medium text-surface-200">User</span>
        </button>
      </div>
    </nav>
  );
}
