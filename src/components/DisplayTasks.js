import { useEffect } from "react";

const DisplayTasks = ({ task, tasks, setTasks }) => {
    useEffect(() => {
        if (task && task.length) {
            setTasks(previous => [...previous, task]);
        }
    }, [task])
    const deleteTask = (index) => {
        const _tasks = tasks.filter((task, _index) => {
            return index !== _index;
        })
        setTasks(_tasks);
    }
    return ( 
        <ul>
            { task?.length && tasks.map((task, index) => (
                <li key={ index }>{ task }<button onClick={ () => deleteTask(index) }>Delete task</button></li>
            )) }
        </ul>
    );
}
 
export default DisplayTasks;