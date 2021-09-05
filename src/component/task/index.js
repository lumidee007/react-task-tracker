import { useState } from "react"
import { TaskContainer , TaskHeader, TaskPara  } from "./styles/task"
import { FaTimes } from 'react-icons/fa'

export default function Task({ task, delTask, toggleReminder }) {
    const [hovered, setHovered] = useState(false)

    const delIcon = hovered && <FaTimes style={{color: 'red', cursor: 'pointer'} } onClick={() => delTask(task.id)}/>


    let {text, day} = task


    return (
        <TaskContainer onDoubleClick={() => toggleReminder(task.id)} reminder={`${task.reminder ? 'reminder': ''}`}>
            <TaskHeader 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            > 
                {text} {delIcon}
            </TaskHeader>
            <TaskPara>{day} 
            </TaskPara>
        </TaskContainer>
    ) 
    
}
