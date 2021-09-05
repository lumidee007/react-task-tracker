// import { Container } from "./styles/header"
import { Task } from '../index'


export default function Tasks({ tasks, delTask, toggleReminder }) {
    return (
        <>
       {tasks.map((task) => (
               <Task key={task.id} task={task} delTask={delTask} toggleReminder={toggleReminder}/>
           ))}
        </>   
    )
    
}
