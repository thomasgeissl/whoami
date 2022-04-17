import React from "react"
import Grid from "@mui/material/Grid"
import Project from "./Base"
import Player from "../Player"

export default () => {
  const more = (
    <>
      <p>
        Dauerperformance used a quite complex IT system and dev stack behind the
        scenes. All performers were equiped with rfid tags, which they used to
        to be indentified and trigger events at the different stations. We wrote
        a couple of web interfaces, e.g. registration at the borders, school
        learning platforms and admin dashboards. All web interfaces were written
        using angular. The whole building was monitored via poe surveillance
        cameras. Some of the camera streams were embedded in the public website.
        Our multichannel audio setup was routed through ableton live, the text
        to speech engine based on osx' internal text to speech tool, speech
        recognition was written with openFramweworks. The AI was written using
        some java server framework, which I dont remember, as I have not been
        much involved in the AI development.
      </p>
    </>
  )
  return (
    <Project
      title="kapitael zwei kolektif"
      more={more}
      date={"from 2012 to 2015"}
    >
      <Grid container>
        <Grid item xs={12} sm={4} style={{ textAlign: "left" }}>
          Several performances in collabration with Kapitael Zwei Kolektif, such
          as the{" "}
          <a href="http://www.twoinarow.com/2013/09/konterkunst-konkordia">
            Dauerperformance
          </a>{" "}
          at Schaustelle (
          <a href="https://www.pinakothek.de/besuch/sammlung-moderne-kunst-der-pinakothek-der-moderne">
            Pinakothek der Moderne
          </a>
          ). In order to perform Dauerperformance, we built connected rfid
          readers, web interfaces, voice user interfaces and a rule based AI.
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
