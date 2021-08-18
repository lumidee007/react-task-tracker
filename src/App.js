import { Header, Tasks, AddTask } from './component'
import {useState, useEffect} from 'react'


function App() {

  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    fetch('http://localhost:7000/tasks')
    .then(res => res.json())
    .then(data => setTasks(data))
  }, [])

// Delete Task
const delTask = async (id) => {
  await fetch(`http://localhost:7000/tasks/${id}`, {method: 'DELETE'})
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
