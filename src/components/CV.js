import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import CodeIcon from "@material-ui/icons/Code"
import PowerIcon from "@material-ui/icons/Power"
import BuildIcon from "@material-ui/icons/Build"

const IconContainer = styled.header`
  text-align: center;
`

export default () => {
  const iconStyle = { fontSize: "64px" }
  return (
    <Grid container spacing={3}>
      <Grid item sm={4} xs={12} style={{ textAlign: "center" }}>
        <IconContainer>
          <CodeIcon style={iconStyle}></CodeIcon>
        </IconContainer>
      </Grid>
      <Grid item sm={4} xs={12}>
        <IconContainer>
          <PowerIcon style={iconStyle}></PowerIcon>
        </IconContainer>
      </Grid>
      <Grid item sm={4} xs={12}>
        <IconContainer>
          <BuildIcon style={iconStyle}></BuildIcon>
        </IconContainer>
      </Grid>
    </Grid>
  )
}
