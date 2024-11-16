import { useState } from 'react';


function AddTaskForm({onAddTask}) {
    const [formData, setFormData] = useState({
        task:''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddTask(formData)
        setFormData({ task: '' })
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
      }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a new task" name="task" value={formData.task} onChange={handleChange} />
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default AddTaskForm

