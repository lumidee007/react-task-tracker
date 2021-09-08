import { Container } from "./styles/tasks"
import { Task } from '../index'


export default function Tasks({ tasks, delTask, toggleReminder }) {
    return (
        <Container >
       {tasks.map((task) => (
               <Task key={task.id} task={task} delTask={delTask} toggleReminder={toggleReminder}/>
           ))}
        </Container>   
    )
    
}
