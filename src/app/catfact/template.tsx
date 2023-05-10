'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
