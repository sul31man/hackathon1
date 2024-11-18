import { useState } from 'react';

function AddTaskForm() {
    const [formData, setFormData] = useState({
        task: ''
    });
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Sending data:', formData);

            const response = await fetch('http://localhost:8000/api/tasks/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    task: formData.task,
                    completed: false
                }),
            });

            const data = await response.json();
            console.log('Response:', data);

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}: ${JSON.stringify(data)}`);
            }

            setFormData({ task: '' });
            setError(null);

        } catch (err) {
            setError('Failed to add task: ' + err.message);
            console.error('Error:', err);
        }
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add a new task" 
                    name="task"
                    value={formData.task} 
                    onChange={handleChange} 
                    required
                />
                <button type="submit">Add Task</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
}

export default AddTaskForm;