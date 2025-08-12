/* eslint-disable react/no-unescaped-entities */
'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Users, TrendingUp, Crown, Flame } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Features() {
  const features = [
    {
      icon: Target,
      title: "Prediction Markets",
      description: "Bet on token prices at stream end. More engagement, more hype, more burns."
    },
    {
      icon: Zap,
      title: "Real-time Leaderboards",
      description: "Watch rankings update live as communities battle for the top spots."
    },
    {
      icon: Users,
      title: "Community Warfare",
      description: "Unite your holders to outburn rivals and dominate the stream overlay."
    },
    {
      icon: TrendingUp,
      title: "Price Impact",
      description: "Burns reduce supply while marketing increases demand. Double pump effect."
    },
    {
      icon: Crown,
      title: "Premium Placement",
      description: "Top burners get the biggest, most visible banner spots during streams."
    },
    {
      icon: Flame,
      title: "Burn Verification",
      description: "Every burn is verified on-chain. No faking, no cheating, pure competition."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Built for Memecoin Communities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
            Every feature designed to maximize your token's exposure and community engagement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 h-full shadow-2xl hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-red-600 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
