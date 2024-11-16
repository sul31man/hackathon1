import { useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
function App() {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (formData) => {

    const newTask = {
      id: Date.now(),
      text: formData.task
    }

    setTasks([...tasks, newTask])
  }



  return (
    <div>
    <h1>Task Manager</h1>
    <AddTaskForm onAddTask={handleAddTask} />
    <TaskList tasks={tasks} />

    </div>
  )
}

export default App