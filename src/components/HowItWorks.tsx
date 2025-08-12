'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Trophy, Crown } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function HowItWorks() {
  const steps = [
    {
      icon: TrendingUp,
      title: "Buy & Burn",
      description: "Purchase tokens from Pump.fun and burn them through Pyro to enter the competition",
      step: "01"
    },
    {
      icon: Trophy,
      title: "Climb the Leaderboard", 
      description: "Burn more tokens to rise up the rankings and secure premium banner positions",
      step: "02"
    },
    {
      icon: Crown,
      title: "Get Featured",
      description: "Top burners get their token advertised in livestream overlays to thousands of viewers",
      step: "03"
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
            How Pyro Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
            A system where token burns drive stream advertising. 
            The more you burn, the more visibility you get.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 h-full shadow-2xl hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-red-600">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-orange-400">{item.step}</span>
                  </div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {item.description}
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
