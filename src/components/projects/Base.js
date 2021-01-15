import React from "react"
import styled from "styled-components"
import Date from "../Date"

const Container = styled.li`
  margin-top: 96px;
  margin-bottom: 96px;
  .rightAlign {
    padding-left: 24px;
    text-align: right;
  }
  &:first-of-type {
    margin-top: 0;
  }
`

export default ({ children, title, date }) => {
  return (
    <Container>
      {title && <h3>{title}</h3>}
      {children}
      {date && <Date>{date}</Date>}
    </Container>
  )
}
