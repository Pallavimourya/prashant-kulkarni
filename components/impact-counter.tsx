"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface CounterProps {
  end: number
  label: string
  suffix?: string
  duration?: number
}

function Counter({ end, label, suffix = "+", duration = 2000 }: CounterProps) {
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
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
        {count}
        {suffix}
      </div>
      <div className="text-lg text-gray-300">{label}</div>
    </div>
  )
}

export default function ImpactCounter() {
  return (
    <section className="py-20 bg-theme-gradient text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Impact & Reach</h2>
          <div className="w-20 h-1 bg-theme-accent mb-8"></div>
          <p className="max-w-3xl text-lg text-gray-300">
            The numbers that showcase Prashant Kulkarni's entrepreneurial journey and impact.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <Counter end={15} label="Years of Experience" />
          <Counter end={10} label="Countries" />
          <Counter end={25} label="Businesses" />
          <Counter end={50} label="Food Brands" />
          <Counter end={500} label="Outlets" />
        </div>
      </div>
    </section>
  )
}
