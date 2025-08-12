'use client'

import { motion } from 'framer-motion'
import { Trophy, Play, Crown } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function LiveLeaderboard() {
  const leaderboardData = [
    { rank: 1, token: "CATCOIN", burned: "$2,450", avatar: "🐱", growth: "+15%" },
    { rank: 2, token: "MOONPEPE", burned: "$1,800", avatar: "🐸", growth: "+8%" },
    { rank: 3, token: "BANANA", burned: "$1,200", avatar: "🍌", growth: "+12%" },
    { rank: 4, token: "DOGE2", burned: "$950", avatar: "🐕", growth: "+5%" },
    { rank: 5, token: "ROCKET", burned: "$720", avatar: "🚀", growth: "+3%" }
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
            Live Competition
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
            Watch real-time battles as token communities compete for premium stream placement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Trophy className="mr-3 h-6 w-6 text-yellow-400" />
                  Luna's Stream - Current Rankings
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Live competition • Resets every 24h
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {leaderboardData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-white/5 hover:bg-white/10 transition-all duration-300 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <span className={`text-lg font-bold ${item.rank === 1 ? 'text-yellow-400' : item.rank === 2 ? 'text-gray-300' : item.rank === 3 ? 'text-orange-400' : 'text-gray-400'}`}>
                        #{item.rank}
                      </span>
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-red-600 text-white">
                          {item.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">{item.token}</span>
                        <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                          {item.growth}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-400">{item.burned} burned</div>
                    </div>
                    {item.rank <= 3 && (
                      <Crown className="h-5 w-5 text-yellow-400" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Stream Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Play className="mr-3 h-6 w-6 text-red-500" />
                  Live Stream Overlay
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Winners get featured here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-black/30 backdrop-blur-sm relative overflow-hidden border border-white/10">
                  {/* Video Background */}
                  <video 
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/WhatsApp Video 2025-08-13 at 04.16.53.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Top Banner - Winner */}
                  <div className="absolute top-4 left-4 right-4 bg-red-600 p-3 z-10">
                    <div className="flex items-center justify-between text-black">
                      <div className="flex items-center space-x-2">
                        <Crown className="h-5 w-5" />
                        <span className="font-bold">🐱 CATCOIN</span>
                      </div>
                      <div className="text-sm font-semibold">$2,450 BURNED</div>
                    </div>
                  </div>
                  
                  {/* Side Banners */}
                  <div className="absolute right-4 top-20 bg-white p-2 text-black text-sm z-10">
                    <div className="font-semibold">🐸 MOONPEPE</div>
                    <div className="text-xs">$1,800 burned</div>
                  </div>
                  
                  <div className="absolute right-4 top-36 bg-white p-2 text-black text-sm z-10">
                    <div className="font-semibold">🍌 BANANA</div>
                    <div className="text-xs">$1,200 burned</div>
                  </div>
                  
                  {/* Stream Info Overlay */}
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="text-lg font-semibold mb-1">🎮 Live Stream with Pyro Overlay</div>
                    <div className="text-sm text-gray-300">2.3k viewers • Live</div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <Badge className="bg-red-600/20 text-red-400 border-0">
                    🔴 LIVE • 2,341 viewers
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
