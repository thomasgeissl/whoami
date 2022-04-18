import React from "react"
import Project from "./Base"
import Grid from "@mui/material/Grid"
import upload from "../../assets/images/tangledGarden/upload.png"
import imageEffect from "../../assets/images/tangledGarden/imageEffect.png"

export default () => {
  const more = <></>
  return (
    <Project title="A Scroll through the Garden of Tangled Data" date={"2021"}>
      <p>
        I worked with{" "}
        <a
          href="https://doubleluckyproductions.org/2021/05/10-22-05-2021-garden-of-tangled-data-bei-der-republica/"
          target="_blank"
        >
          double lucky productions
        </a>{" "}
        on an interactive parallax scroll website (yes, I know it is 2022, but
        still ...). It was commissioned by the{" "}
        <a href="https://www.hebbel-am-ufer.de/" target="_blank">
          HAU theater
        </a>{" "}
        and also shown at{" "}
        <a href="https://re-publica.com/" target="_blank">
          re:publica
        </a>
        's offstage program 2021.
      </p>
      <p>
        The frontend was written using react, the image processing/pixel
        shifting was done with p5.js and a couple of shaders. For the backend,
        we used directus.
      </p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img src={upload} alt="bar love triangle"></img>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={imageEffect} alt="bar love triangle"></img>
        </Grid>
      </Grid>
    </Project>
  )
}
