import React from "react"
import styled from "styled-components"

const Container = styled.section`
  margin-top: 128px;
  &:first-of-type {
    margin-top: 0;
  }
  margin-bottom: 128px;
`

export default ({ children }) => {
  return <Container>{children}</Container>
}
