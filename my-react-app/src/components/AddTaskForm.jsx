import { useState } from 'react';

function AddTaskForm({ onAddTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onAddTask(task);
        setTask('');  // Clear input after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;