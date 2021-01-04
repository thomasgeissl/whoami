import React from "react"
import styled from "styled-components"
import Date from "../Date"

const Container = styled.li`
  margin-top: 96px;
  margin-bottom: 96px;
  &:nth-child(2) {
  }
  .rightAlign {
    padding-left: 24px;
    text-align: right;
  }
`

export default ({ children, date }) => {
  return (
    <Container>
      {children}
      {date && <Date>{date}</Date>}
    </Container>
  )
}
