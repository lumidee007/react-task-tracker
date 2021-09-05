
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Tasks, AddTask, Footer, About } from './component'


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

// Manage Reminder
const toggleReminder = async (id) => {
  const res = await fetch(`http://localhost:7000/tasks/${id}`)
  const data = await res.json()
  const updatedData = {...data, reminder: !data.reminder}
  const newRes = await fetch(`http://localhost:7000/tasks/${id}`, {
    method: 'PUT',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(updatedData)
  })
  const newData = await newRes.json()

  setTasks(tasks.map(task => task.id === id ? {...task, reminder: newData.reminder }: task))
}


// Add New Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:7000/tasks', {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks, data])
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
    <Router>
      <div className='container'>
          <Header showTask={showTask} showAdd={showAdd}/>
          <Route path='/' exact>
              {showAdd && <AddTask addTask={addTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} delTask={delTask} toggleReminder={toggleReminder}/> : <h3 style={style}>NO TASK AVAILABLE</h3>}
            </Route>
            <Route path='/about'>
              <About />
          </Route>
          <Footer />
      </div>
    </Router>
    
  );
}

export default App;
