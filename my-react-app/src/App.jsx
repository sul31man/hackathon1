import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks';
import './App.css';
function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = async (newTask) => {
        try {
            const response = await fetch('http://localhost:8000/api/tasks/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    task: newTask,
                    completed: false
                }),
            });


            const data = await response.json();
            setTasks([...tasks, data]);  // Add new task to existing tasks
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

 

    return (
      <BrowserRouter>
      <div className='app-container'>
              <Navbar />
              <div className='content-container'>
              <Routes>
                <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} handleAddTask={handleAddTask} />} />
              </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;