import {useState} from 'react'
import {Form, FormContainer, FormReminder, FormLabel, FormInput, FormSummit} from './styles/addTask'


export default function AddTask() {
    const [text, setText] = useState('')
    const [dayTime, setDayTime] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <Form>
            <FormContainer>
              <FormLabel>Task</FormLabel>
              <FormInput type='text' placeholder='Add' value={text} onChange={e => setText(e.target.value)}/>
            </FormContainer>

            <FormContainer>
              <FormLabel>Day and Time</FormLabel>
              <FormInput type='text' placeholder='AddDayTime' value={dayTime} onChange={e => setDayTime(e.target.value)}/>
            </FormContainer>

            <FormReminder>
              <FormLabel>Set Reminder</FormLabel>
              <FormInput type='checkbox' placeholder='Add Day_Time' value={reminder} onChange={e => setReminder(e.currentTarget.checked)}/>
            </FormReminder>
            
            <FormSummit type='submit' value='Save Task'/>
        </Form>
    )
}

