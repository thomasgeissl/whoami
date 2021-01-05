import React from "react"
import Grid from "@material-ui/core/Grid"
import Project from "./Base"
import Player from "../Player"

export default () => {
  return (
    <Project date={"from 2012 to 2015"}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          Several performances in collabration with Kapitel Zwei Kolektif, such
          as the{" "}
          <a href="http://www.twoinarow.com/2013/09/konterkunst-konkordia">
            Dauerperformance
          </a>{" "}
          at Schaustelle (
          <a href="https://www.pinakothek.de/besuch/sammlung-moderne-kunst-der-pinakothek-der-moderne">
            Pinakothek der Moderne
          </a>
          ).
        </Grid>
        <Grid item xs={12} sm={8} className="rightAlign">
          <Player
            style={{ margin: "auto" }}
            url="https://www.youtube.com/embed/8ZhofVerLbA"
          />
        </Grid>
      </Grid>
    </Project>
  )
}
