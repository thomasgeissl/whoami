import React from "react"
import styled from "styled-components"

import Section from "../Section"
import VjamAndVgig from "./VjamAndVgig"
import OfVideoLooper from "./VideoLooper"
import KlangLichtStrom from "./KlangLichtStrom"
import GrantlerRecords from "./GrantlerRecords"
import Music from "./Music"
import Nantlab from "./Nantlab"
import Kapitel2Kolektif from "./Kapitel2Kolektif"
import Sharepool from "./Sharepool"
import Polywand from "./PolyWand"

const List = styled.ul`
  /* list-style-type: square; */
  list-style-type: none !important;
  padding-left: 0;
`

export default ({ children }) => {
  return (
    <Section headline={"Projects"} hiddenSubline={"The ones I enjoyed doing"}>
      Unfortunately, I cannot show most of the projects I have worked on due to
      confidentiality reasons. But here is a small selection of projects I did
      aside from my job.
      <List>
        <VjamAndVgig></VjamAndVgig>
        <OfVideoLooper></OfVideoLooper>
        <KlangLichtStrom></KlangLichtStrom>
        <GrantlerRecords></GrantlerRecords>
        <Music></Music>
        <Nantlab></Nantlab>
        <Kapitel2Kolektif></Kapitel2Kolektif>
        {/* <Sharepool></Sharepool> */}
        <Polywand></Polywand>
        {children}
      </List>
    </Section>
  )
}
