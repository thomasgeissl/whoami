import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import grantler0 from "../assets/images/grantlersoundsystem/06072019.png"
import grantler1 from "../assets/images/grantlersoundsystem/14082019.png"
import klanglichtstrom from "../assets/videos/klanglichtstrom.mp4"
import laparesse from "../assets/audio/la_paresse.mp3"
import blt from "../assets/images/nantlab/blt.jpg"
import vj from "../assets/images/nantlab/vj.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

export default function Template({ data }) {
  const classes = useStyles()

  const { about, projects, software, footer } = data
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>whoami</title>
      </Helmet>
      <div className={classes.root}>
        <div
          className="about"
          dangerouslySetInnerHTML={{ __html: about.html }}
        />
        <div
          className="projects"
          // dangerouslySetInnerHTML={{ __html: projects.html }}
        >
          Here is a short selection of projects i have worked on.
          <ul>
            <li>
              Spinning vinyls with the grantler soundsystem dj collective.
              Mostly playing postpunk, 80s, dark wave, shoegaze and dreampop.{" "}
              <br></br>
              <Grid container spacing={2} className="media">
                <Grid item xs={12} sm={3}>
                  <img src={grantler0}></img>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <img src={grantler1}></img>
                </Grid>
              </Grid>
              A spotify playlist is available{" "}
              <a href="https://open.spotify.com/playlist/5bQtfOpbN2hoAmS1groTED?si=9w7twhWCTKeu1ccWQLNutg">
                here
              </a>
              .<div className="date">since 2019</div>
            </li>
            <li>
              <a href="https://www.instagram.com/explore/tags/klanglichtstrom/">
                klanglichtstrom
              </a>{" "}
              is an audio visual performance by{" "}
              <a href="http://www.benbengler.com">Ben Bengler</a> and me. We
              developed custom software based on{" "}
              <a href="https://github.com/thomasgeissl/ofxLiveSet">
                ofxLiveSet
              </a>{" "}
              to extract audio features and create light patterns.
              <Grid container className="media">
                <Grid item xs={12} sm={4}>
                  <video src={klanglichtstrom} controls></video>
                </Grid>
              </Grid>
              Video by{" "}
              <a href="https://www.instagram.com/dava_dnb/">dava_dnb</a> taken
              at <a href="https://reservoir.space">reservoir festival</a>.
              <div className="date">since 2018</div>
            </li>
            <li>
              Guitars and electronics at glumb band. We are currently working on
              our first ep "honesticide" (working title). A very early demo
              snippet of la paresse is available here:<br></br>
              <audio src={laparesse} controls className="media"></audio>
              <br></br>
              It uses some custom plugins, e.g.{" "}
              <a href="https://github.com/thomasgeissl/esrever">esrever</a>.
            </li>
            <li>
              <a href="https://www.facebook.com/events/1734744333425505/">
                sharepool
              </a>{" "}
              is a video opera in collabration with the breakout ensemble. Live
              video mixing and manipulation with a custom made software.
              <div className="date">in 2016</div>
            </li>
            <li>
              Several light concepts and development of{" "}
              <a href="http://www.martinlerf.de/projects/polywand/">
                polygon wall
              </a>
              , an interactive, kinectic installation in collaboration with{" "}
              <a href="http://www.martinlerf.de/">Martin Lerf</a>.
              <iframe
                src="https://player.vimeo.com/video/135904342"
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
                className="media"
              ></iframe>
              <div className="date">from 2014 to 2015</div>
            </li>
            <li>
              Several interactive installations with{" "}
              <a href="https://www.instagram.com/nantlab/">nantlab</a>, ranging
              from interior design to live visuals. E.g.{" "}
              <a href="http://nantlab.com/portfolio/bar-love-triangle/">
                Bar Love Triangle
              </a>{" "}
              a modular, interactive furniture and interior design.
              <Grid container spacing={2} className="media">
                <Grid item xs={12} sm={3}>
                  <img src={blt}></img>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <img src={vj}></img>
                </Grid>
              </Grid>
              <div className="date">since 2012</div>
            </li>
            <li>
              Several performances in collabration with Kapitel Zwei Kolektif,
              such as the{" "}
              <a href="http://www.twoinarow.com/2013/09/konterkunst-konkordia">
                Dauerperformance
              </a>{" "}
              at Schaustelle (
              <a href="https://www.pinakothek.de/besuch/sammlung-moderne-kunst-der-pinakothek-der-moderne">
                Pinakothek der Moderne
              </a>
              ).
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/8ZhofVerLbA"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="media"
              ></iframe>
              <div className="date">from 2012 to 2015</div>
            </li>
          </ul>
        </div>
        <div
          className="software"
          dangerouslySetInnerHTML={{ __html: software.html }}
        />
        <div
          className="footer"
          dangerouslySetInnerHTML={{ __html: footer.html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    about: markdownRemark(frontmatter: { id: { eq: "about" } }) {
      html
    }
    projects: markdownRemark(frontmatter: { id: { eq: "projects" } }) {
      html
    }
    software: markdownRemark(frontmatter: { id: { eq: "software" } }) {
      html
    }
    footer: markdownRemark(frontmatter: { id: { eq: "footer" } }) {
      html
    }
  }
`
