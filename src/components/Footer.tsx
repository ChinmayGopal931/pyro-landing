'use client'

import { Flame } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Flame className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold text-white">Pyro</span>
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Telegram</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
        </div>
        <Separator className="my-6 bg-slate-800" />
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Pyro.</p>
        </div>
      </div>
    </footer>
  )
}
