import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  z-index: 1;
`

const Button = styled.span`
  color: rgb(192, 126, 0);
  cursor: pointer;
`

export default ({ state, onHandler, offHandler }) => {
  return (
    <Container>
      There are two kinds of people in the world: those who {state && <>are</>}
      {!state && <Button onClick={() => onHandler()}>are</Button>} into glitches
      and those who{" "}
      {state && <Button onClick={() => offHandler()}>are not</Button>}
      {!state && <>are not</>}.
    </Container>
  )
}
