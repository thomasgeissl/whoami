import React from "react"
import Grid from "@material-ui/core/Grid"
import Project from "./Base"
import Player from "../Player"
import laparesse from "../../assets/audio/la_paresse.mp3"
import ohnmacht from "../../assets/audio/ohnmacht.mp3"

export default () => {
  return (
    <Project title="music and compositions" date={"since 2018"}>
      <p>
        As written earlier, music is a big thing in my life. Lately, I am very
        much into experimental music and plugins, e.g. custom-made plugins, such
        as <a href="https://github.com/thomasgeissl/esrever">esrever</a>. Here
        are some of my most recent musical projects.
      </p>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <h4>glump</h4>
          <audio src={laparesse} controls></audio>
          Guitars and electronics at glump band.
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4>Silent Sex</h4>
          <audio src={ohnmacht} controls></audio>
          Keys and electronics at{" "}
          <a
            href="https://grantlerrecords.com/artists/silent-sex"
            target="_blank"
            rel="noreferrer"
          >
            Silent Sex
          </a>
          .
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h4>Film Music</h4>
              <Player url="https://player.vimeo.com/video/437790737" />
            </Grid>
            <Grid item xs={12}>
              <p>
                I had to pleasure to score my very talented friend Aylin's short
                film "Spirits and Rocks: an Azorean Myth". It was premiered at{" "}
                <a
                  href="https://www.locarnofestival.ch/LFF/locarno-2020.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Locarno Film Festival
                </a>
                , its international premiere will be at{" "}
                <a
                  href="https://fpg.festival.sundance.org/film-info/5fd15a0504818b1962648d5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sundance Film Festival
                </a>
                .
              </p>
            </Grid>
            <Grid item xs={12} sm={9}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Project>
  )
}
