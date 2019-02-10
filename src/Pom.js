import React, { useState } from 'react'
import styled from 'styled-components'
import { 
  H1,
  Btn,
} from './Styles'

const BtnGroup = styled.div`
display: flex;
justify-content: center;
`

let timer
const Pom = () => {
  const [clock, updateClock] = useState({ started: false, minutes: 25, seconds: 0 })

  const startTimer = () => {
    if (clock.started) {
      clearInterval(timer)
      updateClock({
        started: false,
        minutes: 25,
        seconds: 0,
      })
    } else {
      let seconds = 59
      let next = seconds
      let min = clock.minutes - 1
      timer = setInterval( () => {
        if (min === 0 && next === 0) {
          clearInterval(timer)
          updateClock({ started: false, minutes: 25, seconds: 0 })
        } else {
          next--
            if (next === -1) {
            --min
            next = 59
          }
          updateClock({
            started: true,
            minutes: min,
            seconds: next,
          })
        }
      }, 1000);
    }
  }

  const pad = (time) => {
    return time.toString().padStart(2, '0')
  }

  return (
    <div>
      <H1>{clock.started ? 'Pomodoro Started' : 'Start Pomodoro'}</H1>
      <H1>
        {pad(clock.minutes)}:{pad(clock.seconds)}
      </H1>
      <BtnGroup>
        <Btn flex={3} onClick={startTimer}>
          <i className={`fa ${ clock.started ? 'fa-refresh' : 'fa-play' }`} />
        </Btn>
      </BtnGroup>
    </div>
  )
}

export default Pom
