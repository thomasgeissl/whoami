import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"

import laparesse from "../assets/audio/la_paresse.mp3"
import ohnmacht from "../assets/audio/ohnmacht.mp3"
import blt from "../assets/images/nantlab/blt.jpg"
import vgig from "../assets/images/vgig/screenshot.png"
import styled from "styled-components"

import ReactPlayer from "react-player"

import "../styles/global.scss"

const Container = styled.div`
  margin: auto;
  max-width: 1024px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 24px;
  audio {
    width: 100%;
    margin-top: 32px;
    margin-bottom: 32px;
  }
  img {
    width: 100%;
    margin-top: 64px;
    margin-bottom: 64px;
  }
  ul {
    list-style-type: square;
  }
`
const List = styled.ul`
  list-style-type: square;
`
const Project = styled.li`
  margin-top: 96px;
  margin-bottom: 96px;
  &:nth-child(2) {
  }
  .rightAlign {
    padding-left: 24px;
    text-align: right;
  }
`

const Date = styled.div`
  font-style: italic;
  text-align: right;
  margin-top: 24px;
  margin-bottom: 24px;
  &::before {
    content: "[";
  }
  &::after {
    content: "]";
  }
`

const CV = styled.div``
const Footer = styled.footer`
  margin-top: 128px;
`
export default function Template({ data }) {
  const { about, software, footer } = data
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>whoami</title>
      </Helmet>
      <div>
        <div
          className="about"
          dangerouslySetInnerHTML={{ __html: about.html }}
        />
        <div
          className="projects"
          // dangerouslySetInnerHTML={{ __html: projects.html }}
        >
          <p>
            Unfortunately, I cannot show most of the projects I have worked on
            due to confidentiality reasons. But here is a small selection of
            projects I have worked on aside from my job.
          </p>

          <p>
            Please note that this is a work in progress and very likely
            outdated.
          </p>
          <List>
            <Project>
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
                are two collaborative musical experiments. They started as
                weekend projects during the Covid-19 pandemic. vjam is a virtual
                jam session system, where users can create virtual jam session
                rooms and play music together. vgig is virtual concert hall
                system. it adds omni directional communication to virtual
                concerts, communication between audience and performers, as well
                as audience and audience. vgig is a collaboration with artist
                and composer{" "}
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
              <img src={vgig}></img>
              <p>
                Both projects are built with react, tonejs and mqtt. vgig
                additionally uses react-three-fiber, a threejs react reconciler.
                vjam and vgig run on github pages and are deployed via travis
                continuous integration.
              </p>
              <p>A proper describtion will follow.</p>
              <Date>in 2020</Date>
            </Project>
            <Project>
              <p>
                I wrote a little multi channel video looper for Residenztheater
                Muenchen. It is able to capture video from live video sources or
                load video clips from the hard disk. The software is fully midi
                controllable, it can be synchronised with external midi clocks.
              </p>
              <p>
                The most challenging part was to get accurate frame seeking
                working. Some parts of the tool are already open source, e.g.
                its{" "}
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
              <Date>in 2020</Date>
            </Project>

            <Project>
              <Grid container className="media">
                <Grid item xs={12} sm={4}>
                  <p>
                    <a href="https://www.instagram.com/explore/tags/klanglichtstrom/">
                      klanglichtstrom
                    </a>{" "}
                    is an audio visual performance by{" "}
                    <a href="http://www.benbengler.com">Ben Bengler</a> and me.
                    We developed a custom software based on{" "}
                    <a href="https://github.com/thomasgeissl/ofxLiveSet">
                      ofxLiveSet
                    </a>
                    . It extracts audio features and creates light patterns.
                  </p>
                  <p>It is built with openFrameworks and JUCE.</p>
                </Grid>
                <Grid item xs={12} sm={8} className="rightAlign">
                  <iframe
                    src="https://player.vimeo.com/video/385237672"
                    width="640"
                    height="360"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                  ></iframe>
                </Grid>
              </Grid>

              <Date>since 2018</Date>
            </Project>

            <Project>
              <p>
                <a
                  href="https://grantlerrecords.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  grantler records
                </a>{" "}
                is a music label founded in 2020. Following the diy spirit, we
                wanna support honest music that touches us. Besides the label,
                we run a small blog and dj collective.
              </p>
              <p>
                The blogging software is written with gastbyjs, hosted on github
                pages, deployed via travis continuous integration.
              </p>
            </Project>

            <Project>
              <p>
                As written earlier, music is a big thing in my life. Here are
                some of my most recent musical projects.
              </p>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <h3>glump</h3>
                  <audio src={laparesse} controls></audio>
                  Guitars and electronics at glumb band.
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Silent Sex</h3>
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
                  <h3>Film Music</h3>
                  <p>
                    I had to pleasure to score my very talented friend Aylin's
                    short film "Spirits and Rocks: an Azorean Myth". It was
                    premiered at{" "}
                    <a
                      href="https://www.locarnofestival.ch/LFF/locarno-2020.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Locarno Film Festival
                    </a>
                    , its international premier will be at{" "}
                    <a
                      href="https://fpg.festival.sundance.org/film-info/5fd15a0504818b1962648d5"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sundance Film Festival
                    </a>
                  </p>
                  <ReactPlayer
                    style={{ margin: "auto" }}
                    url="https://player.vimeo.com/video/437790737"
                    controls={true}
                  />
                </Grid>
              </Grid>
              <p>
                Very often i use experimental plugins, e.g. the custom made
                plugins, such as{" "}
                <a href="https://github.com/thomasgeissl/esrever">esrever</a>.
              </p>
              <Date>since 2018</Date>
            </Project>
            <Project>
              <a href="https://www.facebook.com/events/1734744333425505/">
                sharepool
              </a>{" "}
              is a video opera in collabration with the breakout ensemble. Live
              video mixing and manipulation with a custom made software.
              <Date>in 2016</Date>
            </Project>
            <Project>
              <Grid container className="media">
                <Grid item xs={12} sm={4}>
                  Several light concepts and development of{" "}
                  <a href="http://www.martinlerf.de/projects/polywand/">
                    polygon wall
                  </a>
                  , an interactive, kinetic installation in collaboration with{" "}
                  <a href="http://www.martinlerf.de/">Martin Lerf</a>.
                </Grid>
                <Grid item xs={12} sm={8} className="rightAlign">
                  <iframe
                    title="polywand"
                    src="https://player.vimeo.com/video/135904342"
                    width="640"
                    height="360"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    className="media"
                  ></iframe>
                </Grid>
              </Grid>

              <Date>from 2014 to 2015</Date>
            </Project>
            <Project>
              Several interactive installations with{" "}
              <a href="https://www.instagram.com/nantlab/">nantlab</a>, ranging
              from interior design to live visuals and everything in between.
              E.g.{" "}
              <a href="http://nantlab.com/portfolio/bar-love-triangle/">
                Bar Love Triangle
              </a>{" "}
              a modular, interactive furniture and interior design.
              <img src={blt} alt="bar love triangle"></img>
              <Date>since 2012</Date>
            </Project>
            <Project>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  Several performances in collabration with Kapitel Zwei
                  Kolektif, such as the{" "}
                  <a href="http://www.twoinarow.com/2013/09/konterkunst-konkordia">
                    Dauerperformance
                  </a>{" "}
                  at Schaustelle (
                  <a href="https://www.pinakothek.de/besuch/sammlung-moderne-kunst-der-pinakothek-der-moderne">
                    Pinakothek der Moderne
                  </a>
                  ).
                </Grid>
                <Grid item xs={12} sm={8} className="rightAlign">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8ZhofVerLbA"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid>
              </Grid>

              <Date>from 2012 to 2015</Date>
            </Project>
          </List>
        </div>
        <div
          className="software"
          dangerouslySetInnerHTML={{ __html: software.html }}
        />
        <Footer dangerouslySetInnerHTML={{ __html: footer.html }} />
      </div>
    </Container>
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
