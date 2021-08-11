import { TaskContainer , TaskHeader, TaskPara  } from "./styles/task"
import { FaTimes } from 'react-icons/fa'

export default function Task({ task, delTask, toggleReminder }) {

    let {text, day} = task


    return (
        <TaskContainer onDoubleClick={() => toggleReminder(task.id)} reminder={`${task.reminder ? 'reminder': ''}`}>
            <TaskHeader> 
                {text} <FaTimes style={{color: 'red', cursor: 'pointer'} } onClick={() => delTask(task.id)}/></TaskHeader>
            <TaskPara>{day} 
            </TaskPara>
        </TaskContainer>
    ) 
    
}
