import { motion } from 'framer-motion';
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Brain,
  Globe,
  Keyboard,
  ChevronRight,
} from 'lucide-react';
import Card from '@/components/ui/Card';
import { cn } from '@/utils';

const settingsGroups = [
  {
    title: 'Account',
    items: [
      { label: 'Profile', description: 'Manage your account details', icon: User },
      { label: 'Notifications', description: 'Configure alerts and notifications', icon: Bell },
      { label: 'Privacy & Security', description: 'Control your data and privacy', icon: Shield },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { label: 'Appearance', description: 'Theme, colors, and display settings', icon: Palette },
      { label: 'AI Settings', description: 'Model selection and behavior tuning', icon: Brain },
      { label: 'Language & Region', description: 'Language and localization preferences', icon: Globe },
      { label: 'Keyboard Shortcuts', description: 'Customize your shortcuts', icon: Keyboard },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Settings() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="page-container"
    >
      <motion.div variants={item} className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Configure your NeuroLens AI experience</p>
      </motion.div>

      {settingsGroups.map((group) => (
        <motion.div key={group.title} variants={item}>
          <h2 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-3">
            {group.title}
          </h2>
          <Card className="divide-y divide-surface-700/20 !p-0 overflow-hidden">
            {group.items.map((setting) => (
              <button
                key={setting.label}
                className="w-full flex items-center gap-4 p-4 hover:bg-surface-800/30 transition-colors text-left group"
              >
                <div className="p-2.5 rounded-xl bg-surface-800/50 text-surface-400 group-hover:text-primary-400 transition-colors">
                  <setting.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{setting.label}</p>
                  <p className="text-xs text-surface-500">{setting.description}</p>
                </div>
                <ChevronRight size={16} className="text-surface-600 group-hover:text-surface-400 transition-colors" />
              </button>
            ))}
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
