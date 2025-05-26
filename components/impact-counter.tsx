"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface CounterProps {
  end: number
  label: string
  suffix?: string
  duration?: number
  icon?: React.ReactNode
}

function Counter({ end, label, suffix = "+", duration = 2000, icon }: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const countingDone = useRef(false)

  useEffect(() => {
    if (inView && !countingDone.current) {
      let startTime: number | null = null
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          countingDone.current = true
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [inView, end, duration])

  return (
    <div ref={ref} className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-green-600/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-105"></div>
      <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        {icon && (
          <div className="text-green-400 mb-4 transform transition-transform duration-500 group-hover:scale-110">
            {icon}
          </div>
        )}
        <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
          {count}
          <span className="text-white">{suffix}</span>
        </div>
        <div className="text-lg text-gray-300 font-medium">{label}</div>
      </div>
    </div>
  )
}

export default function ImpactCounter() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Tricolor Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-64 h-64 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
            Impact & Reach
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 mb-8"></div>
          <p className="max-w-3xl text-lg text-gray-300">
            The numbers that showcase Prashant Kulkarni's entrepreneurial journey and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <Counter end={15} label="Years of Experience" icon={<ClockIcon />} />
          <Counter end={10} label="Countries" icon={<GlobeIcon />} />
          <Counter end={25} label="Businesses" icon={<BuildingIcon />} />
          <Counter end={50} label="Food Brands" icon={<BookIcon />} />
          <Counter end={500} label="Outlets" icon={<LocationIcon />} />
        </div>
      </div>
    </section>
  )
}

// Sample Icons
const ClockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12A9 9 0 113 12a9 9 0 0118 0z" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21V5a2 2 0 012-2h14a2 2 0 012 2v16m-7 0V10h-4v11m-5 0h14" />
  </svg>
)

const BookIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13C10.832 5.5 9.246 5 7.5 5S4.168 5.5 3 6.25v13C4.168 18.5 5.754 18 7.5 18s3.332.5 4.5 1.25m0-13C13.168 5.5 14.754 5 16.5 5c1.746 0 3.332.5 4.5 1.25v13C19.832 18.5 18.246 18 16.5 18c-1.746 0-3.332.5-4.5 1.25" />
  </svg>
)

const LocationIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 0c4.418 0 8 3.582 8 8H4c0-4.418 3.582-8 8-8z" />
  </svg>
)
