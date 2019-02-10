import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
color: white;
padding-right: 20px;
`
const Btn = styled.button`
background-color: black;
color: white;
height: 20px;
border-radius: 100%;
cursor: pointer;
`

const FlexCol = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Item = styled.div`
display: flex;
justify-content: space-between;
border: solid 1px white;
margin-bottom: 1px;
padding: 5px;
`

const Reorder = ({ order, updateOrder }) => {
  const moveUp = (i) => {
    const temp = order.slice()
    const placeholder = temp[i - 1]
    temp[i-1] = temp[i]
    temp[i] = placeholder
    updateOrder(temp)
  }

  const moveDown = (i) => {
    const temp = order.slice()
    const placeholder = temp[i + 1]
    temp[i+1] = temp[i]
    temp[i] = placeholder
    updateOrder(temp)
  }

  const renderBtn = (i) => {
    if (i === 0) {
      return (
        <FlexCol>
          <Btn onClick={() => moveDown(i)}>
            <i className="fa fa-arrow-down" />
          </Btn>
        </FlexCol>
      )
    } else if (i === order.length - 1) {
      return (
        <FlexCol>
          <Btn onClick={() => moveUp(i)}>
            <i className="fa fa-arrow-up" />
          </Btn>
        </FlexCol>
      )
    } else {
      return (
        <FlexCol>
          <Btn onClick={() => moveUp(i)}>
            <i className="fa fa-arrow-up" />
          </Btn>
          <Btn onClick={() => moveDown(i)}>
            <i className="fa fa-arrow-down" />
          </Btn>
        </FlexCol>
      )
    }
  }

  return (
    <div>
      { order.map( (o,i) => 
      <Item key={i}>
        <H1>{o.name}</H1>
        { renderBtn(i) }
      </Item>
    ) 
  }
</div>
  )
}

export default Reorder
