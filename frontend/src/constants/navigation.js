import {
  LayoutDashboard,
  MessageSquare,
  FolderKanban,
  Clock,
  Bookmark,
  Brain,
  Settings,
  BarChart3,
} from 'lucide-react';

export const SIDEBAR_NAV = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Chat',
    path: '/chat',
    icon: MessageSquare,
  },
  {
    label: 'Workspace',
    path: '/workspace',
    icon: FolderKanban,
  },
  {
    label: 'History',
    path: '/history',
    icon: Clock,
  },
  {
    label: 'Bookmarks',
    path: '/bookmarks',
    icon: Bookmark,
  },
  {
    label: 'Knowledge',
    path: '/knowledge',
    icon: Brain,
  },
  {
    label: 'Analytics',
    path: '/analytics',
    icon: BarChart3,
  },
];

export const BOTTOM_NAV = [
  {
    label: 'Settings',
    path: '/settings',
    icon: Settings,
  },
];
