import React from "react"
import styled from "styled-components"

const Container = styled.section`
  margin-top: 128px;
  margin-bottom: 128px;
  margin-left: 5px;
  margin-right: 5px;

  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`
const Headline = styled.h2`
  text-align: right;
  font-size: 42px;
  margin-top: 400px;
  /* @media only screen and (max-width: 600px) {
    margin-top: 200px;
  } */
`
const HiddenSubline = styled.h3`
  text-align: right;
  color: white;
  font-size: 38px;
  margin-bottom: 50px;
  /* @media only screen and (max-width: 600px) {
    margin-top: 200px;
  } */
`

export default ({ headline, hiddenSubline, children }) => {
  return (
    <Container>
      <Headline>{headline}</Headline>
      <HiddenSubline>{hiddenSubline}</HiddenSubline>
      {children}
    </Container>
  )
}
