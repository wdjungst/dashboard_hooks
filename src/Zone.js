import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 33vw;
height: 50vh;
border: solid 1px white;
background-color: ${ props => props.color };
`

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90%;
`

const Btn = styled.button`
border-radius: 15%;
background-color: black;
color: white;
`

const Controls = styled.div`
display: flex;
justify-content: space-between;
`

const Zone = ({ children, color }) => {
  const [currentColor, setColor] = useState(color)
  const selector = useRef()

  const changeColor = () =>  {
    setColor(selector.current.value)
  }

  const resetColor = () => {
    setColor(color)
  }

  return (
    <Container color={currentColor}>
      <Controls>
        <input type="color" ref={selector} onChange={changeColor} />
        { color !== currentColor && <Btn onClick={resetColor}>Reset</Btn> }
      </Controls>
      <Content>
        { children }
      </Content>
    </Container>
  )
}

export default Zone
