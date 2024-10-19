import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"



export function TaskSortSelect({ onSort }) {
  return (
    <Select onValueChange={onSort}>
      <SelectTrigger className="md:w-[180px]">
        <SelectValue placeholder="Sort by priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Priorities</SelectItem>
        <SelectItem value="high">High Priority</SelectItem>
        <SelectItem value="medium">Medium Priority</SelectItem>
        <SelectItem value="low">Low Priority</SelectItem>
      </SelectContent>
    </Select>
  )
}