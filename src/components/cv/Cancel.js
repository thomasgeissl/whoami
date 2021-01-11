import { Translate } from "@material-ui/icons"
import React from "react"

export default ({ x, y }) => {
  return (
    <circle
      cx={x}
      cy={y}
      r={5}
      stroke={"rgb(192, 126, 0)"}
      //   fill={"rgb(192, 126, 0)"}
      fill="lightgray"
      //   fill="none"
    ></circle>
    // <g transform={`translate(${x}, ${y}, 0)`}>
    //   <path
    //     d="M 10,10 l 90,90 M 100,10 l -90,90"
    //     stroke="red"
    //     stroke-width="10"
    //   />
    // </g>
    // <line x1={x - 5} y1={y - 5} x2={x + 5} y2={y + 5}></line>
  )
}
