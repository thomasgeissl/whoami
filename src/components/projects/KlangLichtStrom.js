import React from "react"
import Grid from "@material-ui/core/Grid"
import Project from "./Base"
import Player from "../Player"

export default () => {
  return (
    <Project date={"since 2018"}>
      <Grid container className="media">
        <Grid item xs={12} sm={4}>
          <p>
            <a href="https://klanglichtstrom.de">klanglichtstrom</a> is an audio
            visual performance by{" "}
            <a href="http://www.benbengler.com">Ben Bengler</a> and me. We
            developed a custom software based on{" "}
            <a href="https://github.com/thomasgeissl/ofxLiveSet">ofxLiveSet</a>.
            It extracts audio features and creates light patterns.
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
