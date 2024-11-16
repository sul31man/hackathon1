function TaskList({tasks}) {
    return (
        <div>
            <h2>Task List:</h2>
            {tasks.map((task) => (
                <p key={task.id}>{task.title}</p>  // Changed from task.text to task.title
            ))}
        </div>
    )
}

export default TaskList
