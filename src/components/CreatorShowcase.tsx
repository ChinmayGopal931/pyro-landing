/* eslint-disable react/no-unescaped-entities */
'use client'

import { motion } from 'framer-motion'
import { Play, Users, Flame, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function CreatorShowcase() {
  const creators = [
    {
      name: "Luna",
      handle: "@LunaGaming",
      avatar: "👩‍🎮",
      category: "Gaming",
      viewers: "2.3K",
      totalBurned: "$45K",
      quote: "Pyro turned my streams into token battlegrounds. My community loves the competition!",
      featured: true
    },
    {
      name: "CryptoKing",
      handle: "@CryptoKingSOL",
      avatar: "👑",
      category: "Trading",
      viewers: "1.8K", 
      totalBurned: "$32K",
      quote: "The burn leaderboard creates insane engagement. Projects fight to get featured.",
      featured: false
    },
    {
      name: "MemeQueen",
      handle: "@MemeQueenSOL",
      avatar: "👸",
      category: "Memes",
      viewers: "3.1K",
      totalBurned: "$67K", 
      quote: "Every stream is like hosting a gladiator arena for memecoins. Pure entertainment.",
      featured: true
    }
  ]

  const stats = [
    { label: "Active Streamers", value: "500+" },
    { label: "Total Burns", value: "$2.4M" },
    { label: "Communities", value: "1,200+" },
    { label: "Avg. Engagement", value: "+340%" }
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
            Streamers Love Pyro
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
            Join hundreds of streamers who've transformed their content into premium 
            advertising real estate for the hottest Solana tokens.
          </p>
        </motion.div>

        {/* Creator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {creators.map((creator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-white/10 backdrop-blur-xl border border-white/20 h-full shadow-2xl hover:bg-white/15 transition-all duration-300 ${creator.featured ? 'border-orange-400/50' : ''}`}>
                <CardContent className="p-6">
                  {creator.featured && (
                    <Badge className="mb-4 bg-orange-600/20 text-orange-400 border-orange-600/30">
                      <Star className="h-3 w-3 mr-1" />
                      Featured Streamer
                    </Badge>
                  )}
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="text-2xl bg-red-600">
                        {creator.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold text-white">{creator.name}</h3>
                      <p className="text-gray-400">{creator.handle}</p>
                      <Badge variant="secondary" className="mt-1 bg-purple-600/20 text-purple-400 border-purple-600/30">
                        {creator.category}
                      </Badge>
                    </div>
                  </div>

                  <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                    "{creator.quote}"
                  </blockquote>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center text-red-400 mb-1">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="font-bold">{creator.viewers}</span>
                      </div>
                      <div className="text-xs text-gray-400">Avg. Viewers</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center text-red-400 mb-1">
                        <Flame className="h-4 w-4 mr-1" />
                        <span className="font-bold">{creator.totalBurned}</span>
                      </div>
                      <div className="text-xs text-gray-400">Total Burned</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* For Streamers CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Play className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Monetize Your Stream?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join Pyro and turn every stream into a revenue opportunity. 
                Set up takes 5 minutes, integration is seamless with OBS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold text-lg">
                  Apply as Streamer
                </Button>
                {/* <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 font-semibold text-lg">
                  View Integration Guide
                </Button> */}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
