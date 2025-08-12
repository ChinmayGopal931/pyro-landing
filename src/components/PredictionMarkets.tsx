'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, Timer } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export function PredictionMarkets() {
  const predictions = [
    {
      token: "CATCOIN",
      currentPrice: "$0.0042",
      prediction: "Will end stream above $0.005?",
      yesOdds: 65,
      noOdds: 35,
      totalPool: "$1,240",
      timeLeft: "2h 15m",
      trend: "up"
    },
    {
      token: "MOONPEPE", 
      currentPrice: "$0.0018",
      prediction: "Will we cross 2k viewers?",
      yesOdds: 42,
      noOdds: 58,
      totalPool: "$890",
      timeLeft: "2h 15m",
      trend: "down"
    },
    {
      token: "GAINZY",
      currentPrice: "$0.0067",
      prediction: "Will Gainzy lose 5k on pinko balls?",
      yesOdds: 78,
      noOdds: 22,
      totalPool: "$2,100",
      timeLeft: "2h 15m",
      trend: "up"
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
            Prediction Markets
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
            Double down on your conviction. Predict token prices and multiply your gains 
            while fueling the burn competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {predictions.map((pred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white">{pred.token}</CardTitle>
                    <Badge className={`${pred.trend === 'up' ? 'bg-green-600/20 text-green-400 border-green-600/30' : 'bg-red-600/20 text-red-400 border-red-600/30'}`}>
                      {pred.trend === 'up' ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                      {pred.currentPrice}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {pred.prediction}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Odds Display */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-semibold">YES {pred.yesOdds}%</span>
                      <span className="text-red-400 font-semibold">NO {pred.noOdds}%</span>
                    </div>
                    <Progress value={pred.yesOdds} className="h-2" />
                  </div>

                  {/* Pool Info */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>Pool: {pred.totalPool}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Timer className="h-4 w-4 mr-1" />
                      <span>{pred.timeLeft}</span>
                    </div>
                  </div>

                  {/* Betting Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Bet YES
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-slate-600 text-red-400 hover:bg-red-600/10"
                    >
                      Bet NO
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                More Predictions = More Burns
              </h3>
              <p className="text-gray-300 mb-6">
                When communities bet on their token&apos;s performance, they&apos;re more likely to burn 
                to support the price. It&apos;s a virtuous cycle of hype and burns.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Create Prediction Market
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
