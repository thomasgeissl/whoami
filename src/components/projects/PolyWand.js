import React from "react"
import Grid from "@material-ui/core/Grid"
import Project from "./Base"
import Player from "../Player"

export default () => {
  return (
    <Project title="polywand" date={"from 2014 to 2015"}>
      <Grid container className="media">
        <Grid item xs={12} sm={4}>
          Several light concepts and development of{" "}
          <a href="http://www.martinlerf.de/projects/polywand/">polygon wall</a>
          , an interactive, kinetic installation in collaboration with{" "}
          <a href="http://www.martinlerf.de/">Martin Lerf</a>.
        </Grid>
        <Grid item xs={12} sm={8} className="rightAlign">
          <Player url="https://player.vimeo.com/video/135904342"></Player>
        </Grid>
      </Grid>
    </Project>
  )
}
