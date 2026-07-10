import { NavLink } from 'react-router-dom';
import { Brain, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SIDEBAR_NAV, BOTTOM_NAV } from '@/constants';
import { useSidebarStore } from '@/store';
import { useMediaQuery } from '@/hooks';
import { cn } from '@/utils';

export default function Sidebar() {
  const { isOpen, isCollapsed, close, toggleCollapse } = useSidebarStore();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const sidebarWidth = isCollapsed ? 'w-[72px]' : 'w-64';

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={cn(
          'glass-sidebar fixed lg:sticky top-0 left-0 z-50 h-screen flex flex-col transition-all duration-300',
          sidebarWidth,
          isDesktop ? 'translate-x-0' : isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-4 border-b border-surface-700/20 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center shrink-0">
            <Brain size={20} className="text-white" />
          </div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="overflow-hidden"
            >
              <h1 className="text-base font-bold gradient-text whitespace-nowrap">NeuroLens AI</h1>
              <p className="text-[10px] text-surface-500 -mt-0.5">Browser Companion</p>
            </motion.div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {SIDEBAR_NAV.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => !isDesktop && close()}
              className={({ isActive }) =>
                cn('sidebar-link', isActive && 'active', isCollapsed && 'justify-center px-2')
              }
            >
              <item.icon size={20} className="shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-surface-700/20 space-y-1">
          {BOTTOM_NAV.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => !isDesktop && close()}
              className={({ isActive }) =>
                cn('sidebar-link', isActive && 'active', isCollapsed && 'justify-center px-2')
              }
            >
              <item.icon size={20} className="shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </NavLink>
          ))}

          {/* Collapse toggle — desktop only */}
          {isDesktop && (
            <button
              onClick={toggleCollapse}
              className="sidebar-link w-full justify-center"
            >
              {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              {!isCollapsed && <span className="text-xs">Collapse</span>}
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
