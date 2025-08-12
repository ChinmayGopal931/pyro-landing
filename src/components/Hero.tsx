 
'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-red-600 text-white px-4 py-2 text-sm border-0">
            🔥 Burn-to-Advertise Platform on Solana
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none drop-shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Burn Tokens,
            </motion.div>
            <motion.span 
              className="text-red-400 block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Rule Streams
            </motion.span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed drop-shadow-md">
            Turn your token burns into premium stream advertising. The more you burn, 
            the higher you rank, the more exposure you get.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <Flame className="mr-2 h-5 w-5" />
              Start Burning
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">-</div>
            <div className="text-gray-400">Tokens Burned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">-</div>
            <div className="text-gray-400">Active Streamers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">-</div>
            <div className="text-gray-400">Community Members</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
