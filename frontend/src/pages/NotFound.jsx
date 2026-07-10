import { motion } from 'framer-motion';
import { Home, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-6"
      >
        {/* Glowing 404 */}
        <div className="relative mb-6">
          <h1 className="text-[120px] sm:text-[160px] font-extrabold gradient-text leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-primary-500 via-accent-violet to-accent-fuchsia" />
        </div>

        <div className="flex items-center justify-center gap-2 mb-3">
          <Brain className="text-primary-400" size={24} />
          <h2 className="text-xl font-semibold text-white">Page Not Found</h2>
        </div>

        <p className="text-surface-400 max-w-md mx-auto mb-8">
          The neural pathway you're looking for doesn't exist. It might have been moved, deleted, or
          never existed in the first place.
        </p>

        <Link to="/dashboard">
          <Button variant="primary" size="lg">
            <Home size={18} /> Back to Dashboard
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
