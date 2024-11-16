function TaskItem({ task, onToggle, onDelete }) {
    return (
      <div className="task-item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    )
  }
  
  export default TaskItem