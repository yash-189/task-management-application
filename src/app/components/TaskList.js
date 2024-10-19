import React from 'react'
import TaskCard from './TaskCard'

export function TaskList({ tasks, updateTask, deleteTask, toggleComplete }) {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No tasks found. Add a task to get started!</p>
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  )
}
