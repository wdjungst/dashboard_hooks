import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { 
  H1,
  Flex,
  Btn,
} from './Styles'

const Form = styled.form`
flex: 3;
display: flex;
flex-direction: column;
padding: 20px;
`

const TextArea = styled.textarea`
min-width: 400px;
`

const Notes = () => {
  const content = useRef()
  const search = useRef()
  const [show, setShow] = useState(true)
  const [notes, setNotes] = useState([])
  const [viewing, setViewing] = useState(notes[0])

  const toggleShow = () => {
    setShow(!show)
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    const note = content.current.value
    setNotes([
      ...notes,
      note,
    ])
    setViewing(note)
    setShow(true)
  }

  const handleChange = () => {
    const value = search.current.value 
    const prevViewing = viewing
    if (value.length) {
      const  regex = new RegExp(value.toLowerCase())
      const note = notes.find( n => regex.test(n.toLowerCase()) )
      if(note)
        setViewing(note)
    } else {
      setViewing(prevViewing)
    }
  }

  const showNotes = () => {
    return (
      <Flex direction="column">
        <input style={{ width: '400px', marginTop: '20px', marginBottom: '20px' }} ref={search}  onChange={handleChange} />
        <H1>{viewing}</H1>
      </Flex>
    )
  }

  const noteForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <TextArea rows="10" ref={content}>
        </TextArea>
        <Btn flex={3}>Save</Btn>
      </Form>
    )
  }

  return (
    <div>
      <H1>Notes</H1>
      <Flex>
        <Btn flex={3} onClick={toggleShow}>{show ? 'Add Note' : 'View Notes'}</Btn>
      </Flex>
      <Flex>
        { show ? showNotes() : noteForm() }
      </Flex>
    </div>
  )
}

export default Notes
