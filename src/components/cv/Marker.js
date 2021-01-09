import React from "react"

export default ({ x, y }) => {
  return (
    <circle
      cx={x}
      cy={y}
      r={5}
      stroke={"rgb(192, 126, 0)"}
      //   fill={"rgb(192, 126, 0)"}
      fill="white"
      //   fill="none"
    ></circle>
  )
}
