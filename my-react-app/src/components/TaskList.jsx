function TaskList({tasks}) {
    return (
        <div>
            <h2>Task List:</h2>
            {tasks.map((task) => (
                <p key={task.id}>{task.text}</p>
            ))}
        </div>
    )
}

export default TaskList

