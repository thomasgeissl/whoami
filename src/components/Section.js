import React from "react"
import styled from "styled-components"

const Container = styled.section`
  margin-top: 128px;
  margin-bottom: 128px;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`
const Headline = styled.h2`
  text-align: right;
`

export default ({ headline, children }) => {
  return (
    <Container>
      <Headline>{headline}</Headline>
      {children}
    </Container>
  )
}
