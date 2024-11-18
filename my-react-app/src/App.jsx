import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

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
        <div>
          <h1> Task Manager</h1>
            <AddTaskForm onAddTask={handleAddTask} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;