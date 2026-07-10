import { Outlet } from 'react-router-dom';
import { Brain } from 'lucide-react';

export default function ExtensionLayout() {
  return (
    <div className="w-[360px] h-[500px] bg-surface-950 overflow-hidden flex flex-col">
      {/* Extension Header */}
      <div className="glass-navbar px-4 h-12 flex items-center gap-2 shrink-0">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center">
          <Brain size={14} className="text-white" />
        </div>
        <span className="text-sm font-semibold gradient-text">NeuroLens AI</span>
      </div>

      {/* Extension Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
