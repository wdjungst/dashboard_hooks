import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { 
  H1,
} from './Styles'

const H2 = styled.h2`
color: white;
`

const Flex = styled.div`
display: flex;
justify-content: space-between
height: 100%;
padding: 10px;
`
const Btn = styled.button`
color: white;
background-color: black;
border-radius: 15%;
max-height: 30px;
`

const Tasks = () => {
  const input = useRef(null)
  const [tasks, updateTasks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    updateTasks([
      ...tasks,
      input.current.value,
    ])
    input.current.value = null
  }

  const remove = (index) => {
    updateTasks(tasks.filter( (t,i) => i !== index ))
  }

  const attrs = { style: { width: '300px' } }

  if (tasks.length === 3)
    attrs.disabled = true

  return (
    <div>
      { tasks.length === 0 ? <H1>0 Tasks</H1> : <H1>Tasks</H1> }
      <form onSubmit={handleSubmit}>
        <input {...attrs} ref={input} />
      </form>
      { tasks.map( (task, i) =>
      <Flex key={i}>
        <H2>{task}</H2>
        <Btn onClick={() => remove(i)}>
          <i className="fa fa-trash" />
        </Btn>
      </Flex>
    )
  }
</div>
  )
}

export default Tasks
