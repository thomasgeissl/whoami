import React from "react"
import Grid from "@material-ui/core/Grid"
import Project from "./Base"
import Player from "../Player"

export default () => {
  return (
    <Project date={"since 2020"}>
      <p>
        <a href="https://grantlerrecords.com/" target="_blank" rel="noreferrer">
          grantler records
        </a>{" "}
        is a music label founded in 2020. Following the diy spirit, we wanna
        support honest music that touches us. Besides the label, we run a small
        blog and dj collective.
      </p>
      <p>
        The blogging software is written with gastbyjs, hosted on github pages,
        deployed via travis continuous integration.
      </p>
    </Project>
  )
}
