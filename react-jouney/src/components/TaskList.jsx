import Task from "./Task";

export default function TaskList({tasks}){
    return (
        <div>
            {tasks.map((task)=>(
            <li key={task.i}>
                
            </li>

            ))}
        </div>
    );
}