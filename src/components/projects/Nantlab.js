import React from "react"
import Project from "./Base"
import blt from "../../assets/images/nantlab/blt.jpg"

export default () => {
  return (
    <Project date={"since 2012"}>
      Several interactive installations with{" "}
      <a href="https://www.instagram.com/nantlab/">nantlab</a>, ranging from
      interior design to live visuals and everything in between. E.g.{" "}
      <a href="http://nantlab.com/portfolio/bar-love-triangle/">
        Bar Love Triangle
      </a>{" "}
      a modular, interactive furniture and interior design.
      <img src={blt} alt="bar love triangle"></img>
    </Project>
  )
}
