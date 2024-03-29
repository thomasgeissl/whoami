import React from "react"
import Grid from "@mui/material/Grid"
import Project from "./Base"
import Player from "../Player"

export default () => {
  return (
    <Project title={"Klang-/Licht-STROM"} date={"since 2018"}>
      <Grid container className="media">
        <Grid item xs={12} sm={4} style={{ textAlign: "left" }}>
          <p>
            <a
              href="https://klanglichtstrom.de"
              target="_blank"
              rel="noreferrer"
            >
              klanglichtstrom
            </a>{" "}
            is an audio visual performance by{" "}
            <a
              href="http://www.benbengler.com"
              target="_blank"
              rel="noreferrer"
            >
              Ben Bengler
            </a>{" "}
            and me. We developed a custom software based on{" "}
            <a
              href="https://github.com/thomasgeissl/ofxLiveSet"
              target="_blank"
              rel="noreferrer"
            >
              ofxLiveSet
            </a>
            . It extracts audio features and creates light patterns.
          </p>
          <p>It is built with openFrameworks and JUCE.</p>
        </Grid>
        <Grid item xs={12} sm={8} className="rightAlign">
          <Player url="https://player.vimeo.com/video/385237672"></Player>
        </Grid>
      </Grid>
    </Project>
  )
}
