import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import CodeIcon from "@material-ui/icons/Code"
import PowerIcon from "@material-ui/icons/Power"
import BuildIcon from "@material-ui/icons/Build"

import Section from "./Section"

const IconContainer = styled.header`
  text-align: center;
  margin-bottom: 32px;
`

export default () => {
  const iconStyle = { fontSize: "64px" }
  return (
    <Section headline={"What I do"} hiddenSubline={"My skills"}>
      <Grid container spacing={3} style={{ textAlign: "left" }}>
        <Grid item sm={4} xs={12}>
          <IconContainer>
            <CodeIcon style={iconStyle}></CodeIcon>
          </IconContainer>
          <p>
            I write software, mostly using c++ or javascript, whatever fits the
            requirements.
          </p>
          <p>
            Frameworks, such as openFrameworks, Qt or JUCE are my choices when
            high performance is needed.
          </p>
          <p>
            I do lot of graphical UI prototyping, using javascript frameworks,
            e.g. react, vue or framer. Node.js usually does the job for the
            server-side counter parts, hardware and backend interfaces.
          </p>
        </Grid>
        <Grid item sm={4} xs={12}>
          <IconContainer>
            <PowerIcon style={iconStyle}></PowerIcon>
          </IconContainer>
          <p>
            I am not an electrical engineer, but I am definitely not afraid of
            the soldering iron, designing pcbs and getting them manufactured.
          </p>
          <p>
            Arduino compatible boards are my friends, as well as raspberry pis.{" "}
          </p>
        </Grid>
        <Grid item sm={4} xs={12}>
          <IconContainer>
            <BuildIcon style={iconStyle}></BuildIcon>
          </IconContainer>
          <p>
            I am a DIY person. I love working with wood and building my own
            mechanical parts.
          </p>
          <p>
            Unfortunately, I do not have access to laser cutters, but the 3D
            printing parts very often help to build quick prototypes.
          </p>
        </Grid>
      </Grid>
      {/* <p>
        This is a only small and not very detailed selection of my skills. Let's
        have a conversation if you are interested or have any questions.
      </p> */}
    </Section>
  )
}
