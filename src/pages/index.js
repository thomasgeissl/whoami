import React, { useState } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Section from "../components/Section"
import styled from "styled-components"

import Projects from "../components/projects/List"
import Skills from "../components/Skills"
import CV from "../components/CV"
import "../styles/global.scss"

import Controls from "../components/visual/Controls"
import Visual from "../components/visual/Visual"

const Container = styled.div`
  margin: auto;
  max-width: 1024px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 22px;
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
const Content = styled.div`
  position: relative;
  z-index: 1;
`

// const CV = styled.div``
const Footer = styled.footer``
export default function Template({ data }) {
  const { intro, software, footer } = data
  const [showVisual, setShowVisual] = useState(true)
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>whoami >_ thomasgeissl</title>
      </Helmet>
      <Visual active={showVisual}></Visual>
      <Content>
        {/* <Controls></Controls> */}
        <Section id="intro" headline={"Intro"}>
          <div dangerouslySetInnerHTML={{ __html: intro.html }} />
        </Section>
        <Skills id="skills"></Skills>
        <Projects id="projects"></Projects>
        <Section id="software" headline={"Open source software"}>
          <div
            className="software"
            dangerouslySetInnerHTML={{ __html: software.html }}
          />
        </Section>
        <CV id="cv"></CV>
        <Section id="outro" headline={"Outro"}>
          <Footer dangerouslySetInnerHTML={{ __html: footer.html }} />
        </Section>
      </Content>
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
    intro: markdownRemark(frontmatter: { id: { eq: "intro" } }) {
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
