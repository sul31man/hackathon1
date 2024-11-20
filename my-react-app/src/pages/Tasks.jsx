import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';

function Tasks({tasks, setTasks, handleAddTask}){

    return (

        <div className='page' style={{width: '100%'}}>
            <h1>Tasks</h1>
            <AddTaskForm onAddTask={handleAddTask} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default Tasks;