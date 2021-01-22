import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing"

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={event => setActive(!active)}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "rgb(192, 126, 32)"} />
    </mesh>
  )
}

export default () => {
  return (
    <>
      <Canvas
        style={{
          width: "100%",
          height: "400px",
          top: "-400px",
          left: 0,
          position: "absolute",
          zIndex: 0,
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-7, 0, 0]} />
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
        </EffectComposer>
      </Canvas>
    </>
  )
}
