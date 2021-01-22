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

const Button = styled.span`
  color: rgb(192, 126, 0);
  cursor: pointer;
`

export default ({ children, title, date, more }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <Container>
      {title && <Headline>{title}</Headline>}
      {children}
      {more && (
        <>
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? <>less</> : <>more</>}
          </Button>
          {showMore && more}
        </>
      )}
      {date && <Date>{date}</Date>}
    </Container>
  )
}
