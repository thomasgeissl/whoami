import React, { useState } from "react"
import styled from "styled-components"
import Date from "../Date"

const Container = styled.li`
  margin-top: 128px;
  margin-bottom: 128;
  .rightAlign {
    padding-left: 24px;
    text-align: right;
  }
  &:first-of-type {
    margin-top: 0;
  }
`

const Headline = styled.h3`
  font-size: 32px;
`

export default ({ children, title, date }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <Container>
      {title && <Headline>{title}</Headline>}
      {children}
      {date && <Date>{date}</Date>}
    </Container>
  )
}
