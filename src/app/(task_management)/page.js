import TaskManager from "./TaskManager";

async function getInitialTasks() {
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    { id: '1', title: 'Complete project', description: 'Finish the task management app', priority: 'high', completed: false },
    { id: '2', title: 'Review code', description: 'Check for bugs and errors', priority: 'medium', completed: false },
    { id: '3', title: 'Submit report', description: 'Prepare the report for submission', priority: 'low', completed: false },
  ];
}

export default async function TaskPage() {
  const initialTasks = await getInitialTasks();
  
  return <TaskManager initialTasks={initialTasks} />;
}