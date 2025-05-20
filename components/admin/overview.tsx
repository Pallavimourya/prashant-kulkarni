"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 1200,
  },
  {
    name: "Feb",
    total: 1900,
  },
  {
    name: "Mar",
    total: 2300,
  },
  {
    name: "Apr",
    total: 2800,
  },
  {
    name: "May",
    total: 3500,
  },
  {
    name: "Jun",
    total: 3200,
  },
  {
    name: "Jul",
    total: 2800,
  },
  {
    name: "Aug",
    total: 3000,
  },
  {
    name: "Sep",
    total: 3300,
  },
  {
    name: "Oct",
    total: 3580,
  },
  {
    name: "Nov",
    total: 3900,
  },
  {
    name: "Dec",
    total: 4100,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-theme-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}
