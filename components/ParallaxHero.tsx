'use client'

import { useParallax } from '../hooks/useParallax'
import { Palette } from 'lucide-react'

export default function ParallaxHero() {
  const offset = useParallax()

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        {/* Backdrop Filter */}
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur" />
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-clayBrown bg-opacity-50 z-10" />

      {/* Centered content */}
      <div className="relative h-full flex flex-col items-center justify-center text-offWhite z-20">
        <Palette className="w-32 h-32 mb-8 text-terracotta" />
        <h1 className="text-4xl md:text-6xl font-bold text-center text-font mb-4">
          Clay Creations Studio
        </h1>
        <p className="text-xl md:text-2xl text-center text-tagFont max-w-2xl px-4">
          Discover the art of pottery in a warm, creative environment
        </p>
      </div>
    </div>
  )
}
