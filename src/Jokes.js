import React, { useState, useEffect } from 'react'
import { H1 } from './Styles'

let interval
const Jokes = () => {
  const [joke, setJoke] = useState('')

  useEffect( () => {
    getJoke()
    interval = setInterval(getJoke, 30000)
    return () => { 
      clearInterval(interval);
    };
  }, [])

  const getJoke = () => {
    fetch('https://geek-jokes.sameerkumar.website/api')
    .then( res => res.json() )
    .then( joke => setJoke(joke) )
  }

  return (
    <div>
      <H1>{joke}</H1>
    </div>
  )
}

export default Jokes
