import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AddEditTaskDialog({ task, onSave, onClose, isOpen, setIsOpen }) {


  
  const [title, setTitle] = useState(task?.title || '')
  const [description, setDescription] = useState(task?.description || '')
  const [priority, setPriority] = useState(task?.priority || 'medium')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)


 

  const validate = () => {
    if (!title.trim()) {
      setError('Title is required')
      return false
    }
    if (!description.trim()) {
      setError('Description is required')
      return false
    }
    return true
  }

  const handleSave = async () => {
    setError(null)
    if (!validate()) return
    setLoading(true)
    // delay for the loading effect
    setTimeout(() => {
      const updatedTask = {
        id: task?.id,
        title,
        description,
        priority,
      }
      onSave(updatedTask)
      setLoading(false)
      setIsOpen(false)
      if (onClose) onClose()
    }, 1000)
  }

  const handleOpenChange = (open) => {
    setIsOpen(open)
    if (!open && onClose) onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
     
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{task ? 'Edit Task' : 'Add New Task'}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <div>
            <label htmlFor="title" className="text-sm font-medium">Title</label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="description" className="text-sm font-medium">Description</label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="priority" className="text-sm font-medium">Priority</label>
            <Select value={priority} onValueChange={(value) => setPriority(value)} disabled={loading}>
              <SelectTrigger id="priority">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={handleSave} disabled={loading}>
          {loading ? 'Saving...' : task ? 'Update Task' : 'Create Task'}
        </Button>
      </DialogContent>
    </Dialog>
  )
}