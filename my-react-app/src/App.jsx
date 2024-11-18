import { useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'

function App() {




  return (
    <div>
    <h1>Task Manager</h1>
    <AddTaskForm/>
    {/*<TaskList/>*/} 
    
    </div>
  )
}

export default App