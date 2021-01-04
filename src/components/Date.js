import React from "react"
import styled from "styled-components"

const Date = styled.div`
  font-style: italic;
  text-align: right;
  margin-top: 24px;
  margin-bottom: 24px;
  &::before {
    content: "[";
  }
  &::after {
    content: "]";
  }
`

export default Date
