import React from "react"
import Grid from "@material-ui/core/Grid"
import Project from "./Base"
import Player from "../Player"

export default () => {
  const more = (
    <>
      <p>
        Polywand is an interactive project, combining different disciplines,
        such as industrial design, human computer interaction, electrical
        engineering and model making. It consists of 18 squared Modules. Each
        module is assembled of four individually controllable triangles. We
        created a kinetic sculpture that reacts to its viewer. It visually
        adapts to its environment, it acts as an abstract mirror. Tilting the
        polygons creates very unique patterns and reflections. It can be
        configured to react to music, people speaking or environment noises. In
        combination with a kinect 3D camera it can be controlled via gestures,
        such as waving. Also it can open an osc interface, which can be used to
        connect custom controllers.
      </p>
      <p>
        An arduino microcontroller drives 72 servo motors. The control software
        is written with Qt and openFrameworks.
      </p>
      <p>
        Polywand’s dimensions are 182 x 91 x 12 cm, it requires a 230V power
        supply, and it opens its own wireless hotspot.
      </p>
    </>
  )
  return (
    <Project title="polywand" date={"from 2014 to 2015"} more={more}>
      <Grid container className="media">
        <Grid item xs={12} sm={4}>
          Several light concepts and design and development of{" "}
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
