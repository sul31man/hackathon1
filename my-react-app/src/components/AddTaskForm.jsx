import { useState } from 'react';

function AddTaskForm({onAddTask}) {
    const [formData, setFormData] = useState({
        task: ''
    })
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await onAddTask(formData)
            setFormData({ task: '' })
            setError(null)
        } catch (err) {
            setError('Failed to add task')
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add a new task" 
                    name="task" 
                    value={formData.task} 
                    onChange={handleChange} 
                />
                <button>Add Task</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    )
}

export default AddTaskForm

