import { Header, Tasks } from './component'
import {useState} from 'react'


function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 6th at 5:20pm',
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

const style = {
  textAlign: 'center',
  marginTop: "80px",
  color: "green",
  fontWeight: 'bold'
}

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} delTask={delTask} /> : <h3 style={style}>NO TASKS AVAILABLE</h3>}
    </div>
  );
}

export default App;
