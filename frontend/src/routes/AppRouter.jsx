import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import {
  Dashboard,
  Chat,
  Workspace,
  History,
  Bookmarks,
  Knowledge,
  Settings,
  Analytics,
  NotFound,
} from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: 'workspace',
        element: <Workspace />,
      },
      {
        path: 'history',
        element: <History />,
      },
      {
        path: 'bookmarks',
        element: <Bookmarks />,
      },
      {
        path: 'knowledge',
        element: <Knowledge />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
