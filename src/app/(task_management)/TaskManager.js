'use client';
import React, { useState } from 'react';
import { TaskList } from '../components/TaskList';
import { AddEditTaskDialog } from '../components/dialog/AddEditTaskDialog';
import { TaskSortSelect } from '../components/TaskSortSelect';
import { Button } from '@/components/ui/button';
import TaskSearch from '../components/TaskSearch';

const priorityOrder = { high: 0, medium: 1, low: 2 };

export default function TaskManager({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTask, setEditingTask] = useState(null);
  const [sortedTasks, setSortedTasks] = useState(tasks);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);


  
  

  const addTask = (newTask) => {
    const task = {
      ...newTask,
      id: Date.now().toString(),
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, task]);
    setSortedTasks((prevSortedTasks) => [...prevSortedTasks, task]);
    setIsAddDialogOpen(false);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setSortedTasks((prevSortedTasks) =>
      prevSortedTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
    setIsEditDialogOpen(false);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setSortedTasks((prevSortedTasks) => prevSortedTasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    setSortedTasks((prevSortedTasks) =>
      prevSortedTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const sortTasks = (priority) => {
    const sorted = [...tasks].sort((a, b) => {
      if (a.priority === priority && b.priority !== priority) return -1;
      if (b.priority === priority && a.priority !== priority) return 1;
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    setSortedTasks(sorted);
  };

  const handleEditTask = (task) => {


    
    setEditingTask(task);
    setIsEditDialogOpen(true);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description.toLowerCase().includes(query.toLowerCase())
    );
    setSortedTasks(filtered);
  };

  return (
    <div className="mb-6 border rounded-lg p-6 bg-white h-full">
      <div className='flex justify-between border-b flex-wrap gap-4'>
        <h1 className="text-base md:text-lg lg:text-lg font-semibold">Task Management</h1>
        <div className="mb-4 flex justify-between  gap-4">
          <TaskSearch onSearch={handleSearch} />
          <Button onClick={() => setIsAddDialogOpen(true)}>Add New Task</Button>
          <TaskSortSelect onSort={sortTasks} />
        </div>
      </div>
      <div>
        <TaskList
          tasks={sortedTasks}
          updateTask={handleEditTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
      
      <AddEditTaskDialog
        onSave={addTask}
        isOpen={isAddDialogOpen}
        setIsOpen={setIsAddDialogOpen}
      />

      {editingTask && (
        <AddEditTaskDialog
          task={editingTask}
          onSave={updateTask}
          isOpen={isEditDialogOpen}
          setIsOpen={setIsEditDialogOpen}
          onClose={() => {
            setEditingTask(null);
            setIsEditDialogOpen(false);
          }}
        />
      )}
    </div>
  );
}