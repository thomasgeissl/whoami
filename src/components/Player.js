import React from "react"
import ReactPlayer from "react-player"

export default ({ url }) => {
  return (
    <ReactPlayer
      style={{ margin: "auto", maxWidth: "100%" }}
      url={url}
      controls={true}
    />
  )
}
