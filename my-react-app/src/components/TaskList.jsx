function TaskList() {
    const [tasks, setTasks] = useState([]);

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
    }, []);

    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>{task.title}</div>
            ))}
        </div>
    );
}

export default TaskList
