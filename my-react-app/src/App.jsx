import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskText) => {
    setTasks([...tasks, {
      id: Date.now(),
      text: taskText,
      completed: false
    }])
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? {...task, completed: !task.completed} : task
    ))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList 
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App