import React, { useState } from 'react'
import styled from 'styled-components'
import Zone from './Zone'
import Pom from './Pom'
import Tasks from './Tasks'
import Notes from './Notes'
import Jokes from './Jokes'
import ResponseGenerator from './ResponseGenerator'
import Reorder from './Reorder'

const Flex = styled.div`
display: flex;
flex-direction: ${ props => props.direction || 'row' }
`

const colors = [
  '#173753',
  '#6DAEDB',
  '#2892D7',
  '#1B4353',
  '#FEDA6A',
  '#1D70A2',
]

const initialOrder = [
  Pom,
  Tasks,
  Notes,
  Jokes,
  ResponseGenerator,
]

const App = () => {
  const [order, setOrder] = useState(initialOrder) 

  const top = order.slice(0,3)
  const bottom = order.slice(3,order.length)

  const setHalf = (group, offset = 0) => {
    return group.map( (Component, i) => 
    <Zone key={i + offset} color={colors[i + offset]}>
      <Component />
    </Zone>
                    )
  }

  const updateOrder = (newOrder) => {
    setOrder(newOrder)
  }

  return (
    <Flex direction="column">
      <Flex>
        { setHalf(top) }
      </Flex>
      <Flex>
        { setHalf(bottom, 3) }
        <Zone color={colors[5]}>
          <Reorder order={order} updateOrder={updateOrder} />
        </Zone>
      </Flex>
    </Flex>
  )
}

export default App
