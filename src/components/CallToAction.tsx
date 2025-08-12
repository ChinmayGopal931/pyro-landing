'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Get your token the exposure it deserves. 
            Every burn counts, every rank matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              Join Community
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
