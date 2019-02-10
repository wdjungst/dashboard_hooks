import styled from 'styled-components'

export const H1 = styled.h1`
  color: white;
  text-align: center;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${ props => props.direction || 'row' };
`

export const Btn = styled.button`
  color: white;
  background-color: black;
  flex: ${ props => props.flex || 1 };
`
