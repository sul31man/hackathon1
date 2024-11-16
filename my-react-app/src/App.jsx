import { useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try { 
      const response= await fetch('http://localhost:8000/api/tasks/')
      const data = await response.json()
      setTasks(data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  const handleAddTask = async (formData) => {
    try {
      const response = await fetch('http://localhost:8000/api/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.task,
          description: '',  // Optional: Add if you want to include description
          completed: false
        }),
      })
      const newTask = await response.json()
      setTasks([...tasks, newTask])
    } catch (error) {
      console.error('Error adding task:', error)
    }
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