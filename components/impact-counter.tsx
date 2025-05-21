"use client"

import { useState, useEffect, useRef } from "react"

export default function ImpactCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const [counters, setCounters] = useState({
    businesses: 0,
    entrepreneurs: 0,
    countries: 0,
    revenue: 0,
  })

  const targets = {
    businesses: 12,
    entrepreneurs: 5000,
    countries: 15,
    revenue: 100,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0

    const timer = setInterval(() => {
      frame++

      const progress = frame / totalFrames
      const easeOutQuad = 1 - (1 - progress) * (1 - progress)

      setCounters({
        businesses: Math.floor(easeOutQuad * targets.businesses),
        entrepreneurs: Math.floor(easeOutQuad * targets.entrepreneurs),
        countries: Math.floor(easeOutQuad * targets.countries),
        revenue: Math.floor(easeOutQuad * targets.revenue),
      })

      if (frame === totalFrames) {
        clearInterval(timer)
      }
    }, frameDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-16 bg-theme-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Impact By Numbers</h2>
          <div className="w-20 h-1 bg-theme-accent mb-8"></div>
          <p className="max-w-3xl text-lg text-white/80">
            Prashant Kulkarni's entrepreneurial journey has created significant impact across multiple dimensions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-theme-accent">{counters.businesses}+</div>
            <p className="text-white/80">Businesses Built</p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-theme-accent">{counters.entrepreneurs}+</div>
            <p className="text-white/80">Entrepreneurs Mentored</p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-theme-accent">{counters.countries}+</div>
            <p className="text-white/80">Countries Reached</p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-theme-accent">${counters.revenue}M+</div>
            <p className="text-white/80">Revenue Generated</p>
          </div>
        </div>
      </div>
    </section>
  )
}
