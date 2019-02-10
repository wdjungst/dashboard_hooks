import React, { useState } from 'react'
import styled from 'styled-components'

const Ball = styled.div`
height: 400px;
width: 400px;
background: rgb(30,30,30);
border-radius: 100%;
overflow: hidden;
position: relative;
box-shadow: inset -10px 10px 50px rgba(255,255,255,0.4), inset 5px -5px 50px rgba(0,0,0,1), inset 50px -50px 200px rgba(0,0,0,1), inset 0px -20px 20px rgba(60,0,60, 1);
display: flex;
align-items: center;
justify-content: center;
`

const H1 = styled.h1`
color: white;
`

const  words = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Do not count on it',
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful'
]

const ResponseGenerator = () => {
  const [response, setResponse] = useState()
  const updateResponse = () => {
    const index = Math.floor(Math.random() * words.length)
    setResponse(words[index])
  }

  return (
    <Ball onClick={updateResponse}>
      <H1>{ response ? response : 'Click For Response' }</H1>
    </Ball>
  )
}

export default ResponseGenerator
