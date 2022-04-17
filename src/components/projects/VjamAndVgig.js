import React from "react"
import Project from "./Base"

import Grid from "@mui/material/Grid"
import vjam from "../../assets/images/vjam/screenshot.png"
import vgig from "../../assets/images/vgig/screenshot.png"

export default () => {
  const more = (
    <>
      <p>
        Both projects are built with react, tonejs and mqtt. vgig additionally
        uses react-three-fiber, a threejs react reconciler. vjam and vgig run on
        github pages and are deployed via travis continuous integration.
      </p>
      <p>
        <a
          href="https://github.com/thomasgeissl/ofMIDI2MQTT"
          target="_blank"
          rel="noreferrer"
        >
          ofMIDI2MQTT
        </a>{" "}
        can be used to send midi messages from your favourite daw to the virtual
        concert halls.
      </p>
    </>
  )
  return (
    <Project title={"vjam & vgig"} date={"in 2020"} more={more}>
      <p>
        <a
          href="https://thomasgeissl.github.io/vjam/"
          target="_blank"
          rel="noreferrer"
        >
          vjam
        </a>{" "}
        and{" "}
        <a
          href="https://thomasgeissl.github.io/vgig/"
          target="_blank"
          rel="noreferrer"
        >
          vgig
        </a>{" "}
        are two collaborative musical experiments. Both started as weekend
        projects during the Covid-19 pandemic. vjam is a virtual jam session
        system where users can create virtual jam session rooms and play music
        together. vgig is a virtual concert hall systems that adds
        omni-directional communication to virtual concerts; communication
        between audience and performers, as well as audience and audience. vgig
        is a collaboration with artist and composer{" "}
        <a
          href="https://www.instagram.com/windysetiadi/"
          target="_blank"
          rel="noreferrer"
        >
          Windy Setiadi
        </a>{" "}
        and was shown at{" "}
        <a
          href="https://mag20.mediaartglobale.com/#"
          target="_blank"
          rel="noreferrer"
        >
          Media Art Globale
        </a>{" "}
        2020.
      </p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img src={vjam}></img>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={vgig}></img>
        </Grid>
      </Grid>
    </Project>
  )
}
