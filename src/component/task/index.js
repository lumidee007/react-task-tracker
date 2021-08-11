import { TaskContainer , TaskHeader, TaskPara  } from "./styles/task"
import { FaTimes } from 'react-icons/fa'

export default function Task({ task, delTask }) {
    let {text, day} = task



    return (
        <TaskContainer>
            <TaskHeader> {text} <FaTimes style={{color: 'red', cursor: 'pointer'} } onClick={() => delTask(task.id)}/></TaskHeader>
            <TaskPara>{day} </TaskPara>
        </TaskContainer>
    ) 
    
}
