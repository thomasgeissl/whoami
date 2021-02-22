import React from "react"
import Project from "./Base"
import luceDiretta from "../../assets/images/lucediretta/lucediretta.gif"

export default () => {
  return (
    <Project title={"luce diretta - direct light"} date={"in 2021"}>
      <p>
        luce diretta is your friend when working with led installations. It is a
        prototyping tool to display animations directly on led strips. No need
        to wait for a developer to try to replicate an animation. Time for
        iterations. No surprises the day before the deadline when first seeing
        the actual colors. luce diretta can work with different inputs, e.g. ndi
        streams, videos or syphon. And it can export animations to be used
        standalone on microcontrollers.
      </p>
      <p>
        It is built with openFrameworks. The source code can be found on{" "}
        <a
          href="https://github.com/thomasgeissl/lucediretta"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        .
      </p>
      <img src={luceDiretta}></img>
    </Project>
  )
}
