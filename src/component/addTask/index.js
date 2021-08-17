import {useState} from 'react'
import {Form, FormContainer, FormReminder, FormLabel, FormInput, FormSummit, FormInputReminder} from './styles/addTask'


export default function AddTask({ addTask }) {
    const [text, setText] = useState('')
    const [day, setDayTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e => {
      e.preventDefault()
      if(!text) {
        alert('Please enter a task')
        return
      } else {
        addTask({text, day, reminder})
        setText('')
        setDayTime('')
        setReminder(false)
      }
    })

    return (
        <Form onSubmit={onSubmit}>
            <FormContainer>
              <FormLabel>Task</FormLabel>
              <FormInput type='text' placeholder='Add' value={text} onChange={e => setText(e.target.value)}/>
            </FormContainer>

            <FormContainer>
              <FormLabel>Day and Time</FormLabel>
              <FormInput type='text' placeholder='AddDayTime' value={day} onChange={e => setDayTime(e.target.value)}/>
            </FormContainer>

            <FormReminder>
              <FormLabel>Set Reminder</FormLabel>
              <FormInputReminder type='checkbox' checked={reminder} placeholder='Add Day_Time' value={reminder} onChange={e => setReminder(e.currentTarget.checked)}/>
            </FormReminder>
            
            <FormSummit type='submit' value='Save Task'/>
        </Form>
    )
}

