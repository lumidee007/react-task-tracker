import { Header, Tasks, AddTask } from './component'
import {useState} from 'react'


function App() {

  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Dec 6th 2021 at 2:20pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Summit NCC Report',
        day: 'September 2nd at 8am',
        reminder: true
    },
    {
        id: 3,
        text: 'Vacation ',
        day: 'Feb 13th at 9:00pm',
        reminder: true
    },
])

// Delete Task
const delTask = (id) => {
  const updatedTask = tasks.filter(task => task.id !== id)
  setTasks(updatedTask)
}

//Manage Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder }: task))
}

const addTask = (task) => {
  let id = tasks.length + 1;
  let newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

const showTask = () => {
  setShowAdd(!showAdd)
}


const style = {
  textAlign: 'center',
  marginTop: "80px",
  color: "green",
  fontWeight: 900,
}

  return (
    <div className='container'>
      <Header showTask={showTask} showAdd={showAdd}/>
      {showAdd && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} delTask={delTask} toggleReminder={toggleReminder}/> : <h3 style={style}>NO TASK AVAILABLE</h3>}
    </div>
  );
}

export default App;
