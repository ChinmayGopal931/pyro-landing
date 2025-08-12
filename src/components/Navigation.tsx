'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Flame className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold text-white">Pyro</span>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <Button variant="ghost" className="text-white hover:text-red-400">
              How It Works
            </Button>
            <Button variant="ghost" className="text-white hover:text-red-400">
              For Streamers
            </Button> */}
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Launch App
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
