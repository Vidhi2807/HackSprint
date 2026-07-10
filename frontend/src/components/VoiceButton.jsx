import { Mic, MicOff } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils';

export default function VoiceButton({ className }) {
  const [isListening, setIsListening] = useState(false);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsListening(!isListening)}
      className={cn(
        'relative p-3 rounded-2xl transition-all duration-300',
        isListening
          ? 'bg-red-500/20 text-red-400 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
          : 'glass-button text-surface-400 hover:text-white',
        className
      )}
    >
      {isListening ? <MicOff size={20} /> : <Mic size={20} />}
      {isListening && (
        <motion.span
          className="absolute inset-0 rounded-2xl border-2 border-red-500/40"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
