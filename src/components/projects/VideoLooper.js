import React from "react"
import Project from "./Base"

import Grid from "@material-ui/core/Grid"
import vjam from "../../assets/images/vjam/screenshot.png"
import vgig from "../../assets/images/vgig/screenshot.png"

export default () => {
  return (
    <Project date={"in 2020"}>
      <p>
        I wrote a little multi channel video looper for Residenztheater
        Muenchen. It is able to capture video from live video sources or load
        video clips from the hard disk. The software is fully midi controllable,
        it can be synchronised with external midi clocks.
      </p>
      <p>
        The most challenging part was to get accurate frame seeking working.
        Some parts of the tool are already open source, e.g. its{" "}
        <a
          href="https://github.com/thomasgeissl/ofxImageSequencePlayer"
          target="_blank"
          rel="noreferrer"
        >
          video player
        </a>
        .
      </p>
      <p>It is built with openFrameworks.</p>
    </Project>
  )
}
