import React from "react"
import styled from "styled-components"
import Section from "./Section"
import Marker from "./cv/Marker"
import Cancel from "./cv/Cancel"

const Container = styled.div``
const ScrollContainer = styled.div`
  overflow-x: scroll;
`

export default () => {
  const iconStyle = { fontSize: "64px" }
  const startYear = 2003
  const endYear = 2022
  const years = []
  for (let i = startYear; i <= endYear; i++) {
    years.push(i)
  }

  const events = [
    {
      year: 2004,
      label: "Mittlere Reife",
      y: 1,
      success: true,
    },
    {
      start: 2004,
      end: 2007,
      label: "warehouse worker",
      y: 1,
      labelBottom: true,
      success: true,
    },
    { start: 2007, end: 2009, label: "BOS", y: 1, success: true },
    { start: 2009, end: 2014, label: "Lehramt (LMU)", y: 1, success: false },
    {
      start: 2012,
      end: 2015,
      label: "Bachelor Computer Science (LMU)",
      y: 2,
      success: true,
    },
    {
      start: 2015,
      end: 2017,
      label: "Master Human Computer Interaction (LMU)",
      labelBottom: true,
      y: 2,
      success: false,
    },
    {
      start: 2011,
      end: 2021,
      label: "Creative Technologist (Freelance)",
      y: 4,
      success: true,
    },
    {
      start: 2016,
      end: 2021,
      label: "Creative Technologist (IXDS)",
      y: 3,
      success: true,
    },
  ]

  const getPos = year => {
    return `${((year - startYear) / (endYear - startYear)) * 100}%`
  }

  const getY = index => {
    const value = index * 60 + 30
    return value
  }

  return (
    <Section
      id={"cv"}
      headline={"Past, present, future"}
      hiddenSubline={"My json2svg rendered cv"}
    >
      <Container>
        <ScrollContainer>
          <svg width="100%" style={{ minWidth: "1000px", minHeight: "300px" }}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              // stroke="rgb(192, 126, 0)"
              stroke="black"
              strokeWidth={2}
            />
            {years.map((year, index) => {
              //   console.log(`${((year - startYear) / (endYear - startYear)) * 100}%`)
              if (index > 0 && index < years.length - 1) {
                return (
                  <text
                    key={index}
                    x={getPos(year)}
                    y="20"
                    textAnchor={"middle"}
                  >
                    {year}
                  </text>
                )
              }
            })}
            {events.map((event, index) => {
              return (
                <g key={index}>
                  {event.year && (
                    <>
                      <Marker x={event.year} y={40}></Marker>
                      <text
                        x={getPos(event.year)}
                        y={`${getY(event.y) - 10}px`}
                        textAnchor={"middle"}
                      >
                        {event.label}
                      </text>
                    </>
                  )}

                  {!event.year && (
                    <>
                      <line
                        x1={getPos(event.start)}
                        y1={`${getY(event.y)}px`}
                        x2={getPos(event.end)}
                        y2={`${getY(event.y)}px`}
                        stroke="rgb(192, 126, 0)"
                        strokeWidth={1}
                      />
                      <Marker
                        x={getPos(event.start)}
                        y={`${getY(event.y)}px`}
                      ></Marker>
                      {event.success && (
                        <Marker
                          x={getPos(event.end)}
                          y={`${getY(event.y)}px`}
                        ></Marker>
                      )}
                      {!event.success && (
                        <Cancel
                          x={getPos(event.end)}
                          y={`${getY(event.y)}px`}
                        ></Cancel>
                      )}
                      <text
                        x={getPos(event.start + (event.end - event.start) / 2)}
                        y={`${getY(event.y) -
                          10 +
                          (event.labelBottom ? 30 : 0)}px`}
                        textAnchor={"middle"}
                      >
                        {event.label}
                      </text>
                    </>
                  )}
                </g>
              )
            })}
          </svg>
        </ScrollContainer>
        <p>
          Yes, I know how to operate a fork lift. But after realizing that this
          is not what I wanna do for the rest of my work life, I decided to do
          my Abitur at BOS and study afterwards. I studied to be a teacher
          (mathematics and informatics) and in parallel I did my bachelor's
          degree in computer science (mathematics minor). I haven't finished the
          master's degree in human computer interaction and I haven't finished
          Lehramt, but I still like teaching and mentoring. It took me a while
          to find what I want and what I do not want, but now I am quite happy
          with the field I am working in. Currently, I work as a creative
          technologist at IXDS and besides that I am freelancing.
        </p>
      </Container>
    </Section>
  )
}
