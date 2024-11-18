import { useEffect } from 'react';

function TaskList({ tasks, setTasks }) {
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/tasks/');
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);  // Only fetch on mount

    return (
        <div>
            {tasks.slice(-5).map(task => (
                <div key={task.id}>{task.task}</div>
            ))}
        </div>
    );
}

export default TaskList;
