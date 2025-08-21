/* eslint-disable react/no-unescaped-entities */
'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Users, TrendingUp, Crown, Flame } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Features() {
  const features = [
    {
      icon: Target,
      title: "Opinion Markets",
      description: "Bet on price, views, or stream outcomes."
    },
    {
      icon: Zap,
      title: "Real-time Leaderboards",
      description: "See burns update live."
    },
    {
      icon: Users,
      title: "Community Warfare",
      description: "Unite holders to outburn rivals."
    },
    {
      icon: TrendingUp,
      title: "Price Impact",
      description: "Burns cut supply, competition pumps demand."
    },
    {
      icon: Crown,
      title: "Premium Placement",
      description: "Winners secure prime banner space."
    },
    {
      icon: Flame,
      title: "Burn Verification",
      description: "Every burn checked on Solana."
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
            Every feature maximizes exposure and engagement
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
