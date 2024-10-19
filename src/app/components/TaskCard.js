import React from 'react'
import { Button } from "@/components/ui/button"
import { MoreVertical, Pencil, Trash2, CheckCircle2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const priorityConfig = {
  high: { 
    color: 'bg-red-500', 
    afterColor: 'after:bg-red-500', 
    badge: 'bg-red-500  ring-red-600/10',
    lightBg: 'bg-red-50'
  },
  medium: { 
    color: 'bg-yellow-500', 
    afterColor: 'after:bg-yellow-500', 
    badge: 'bg-yellow-500  ring-yellow-600/10',
    lightBg: 'bg-yellow-50'
  },
  low: { 
    color: 'bg-green-500', 
    afterColor: 'after:bg-green-500', 
    badge: 'bg-green-500  ring-green-600/10',
    lightBg: 'bg-green-50'
  }
}

export default function TaskCard({ task, toggleComplete, updateTask, deleteTask }) {
  const priorityStyle = priorityConfig[task.priority]
  return (
    <div className={cn(
      "w-full shadow-sm border rounded-lg md:max-w-md relative overflow-hidden",
      "after:h-full after:absolute after:w-1 after:top-0 after:left-0",
      priorityStyle.afterColor,
      priorityStyle.lightBg, 
      task.completed ? 'opacity-60' : '',
      'hover:shadow-md transition-shadow duration-200'
    )}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <h3 className={cn("font-medium", task.completed ? 'line-through text-gray-500' : '')}>
              {task.title}
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <span className={cn(
              "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium capitalize ring-1 ring-inset text-white",
              priorityStyle.badge
            )}>
              {task.priority}
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => updateTask(task)}>
                  <Pencil className="mr-2 h-4 w-4" />
                  <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => deleteTask(task.id)}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1 mb-3">{task.description}</p>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "w-full justify-start",
            task.completed ? "bg-green-50 text-green-700 hover:bg-green-100" : "text-gray-700 hover:bg-gray-100"
          )}
          onClick={() => toggleComplete(task.id)}
        >
          <CheckCircle2 className={cn("mr-2 h-4 w-4", task.completed ? "text-green-500" : "text-gray-400")} />
          {task.completed ? "Completed" : "Mark as completed"}
        </Button>
      </div>
    </div>
  )
}