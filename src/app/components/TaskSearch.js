import React from 'react'
import { Input } from "@/components/ui/input"



export default function TaskSearch({ onSearch }) {
  return (
    <Input
      type="text"
      placeholder="Search tasks..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full max-w-sm"
    />
  )
}