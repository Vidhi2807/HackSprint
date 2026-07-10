import { Outlet } from 'react-router-dom';
import { Sidebar, Navbar, FloatingAIButton } from '@/components';

export default function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-surface-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <FloatingAIButton />
    </div>
  );
}
