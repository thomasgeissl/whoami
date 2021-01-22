import React from "react"
import Project from "./Base"
import blt from "../../assets/images/nantlab/blt.jpg"

export default () => {
  const more = (
    <>
      <p>
        Bar Love Triangle won the Saint-Ex barephemere competition and was
        exhibited at Staint-Ex culture numérique - Reims for half a year.
      </p>
      <p>
        It consists of over 100 equilateral triangle prisms. These prisms were
        combined to form different shapes. We used them to create a bar,
        benches, tables, a dj desk and stools.
      </p>
      <p>
        The front facing modules were equipped with rgb leds. The control
        software was running on a raspberry pi with touch screen, and it was
        written with Qt.
      </p>
      <p>
        Inspired by computer graphics, we decided to use the triangle as the
        base shape - most minimal and stable. Also hipsters seem to like
        triangles a lot. Inspired by New Order's Bizarre Love Triangle, we
        picked the name bar love triangle.
      </p>
    </>
  )
  return (
    <Project title="nantlab" more={more} date={"since 2012"}>
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
