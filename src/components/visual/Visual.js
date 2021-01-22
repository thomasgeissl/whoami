import React, { useRef, useState, useEffect } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "react-three-fiber"
import { useSprings, a } from "react-spring/three"

import {
  EffectComposer,
  Bloom,
  Noise,
  Glitch,
} from "@react-three/postprocessing"
import { GlitchMode } from "postprocessing"

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
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  )
}

const number = 12
const colors = ["rgb(192, 126, 32)", "rgb(32,32,32)"]
// const colors = ["#c07e00", "#000000", "#222222"]
const random = i => {
  const r = Math.random()
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
  }
}

const data = new Array(number).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 7, 0.1 + Math.random() * 2, 2],
  }
})

function Content() {
  const [springs, set] = useSprings(number, i => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 },
  }))
  useEffect(
    () =>
      void setInterval(() => set(i => ({ ...random(i), delay: i * 40 })), 3000),
    []
  )
  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={d.args} />
      <a.meshStandardMaterial
        attach="material"
        color={springs[index].color}
        roughness={0.75}
        metalness={0.5}
      />
    </a.mesh>
  ))
}

export default ({ active }) => {
  return (
    <>
      {active && (
        <Canvas
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "fixed",
            zIndex: 0,
          }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Content></Content>
          <EffectComposer>
            {/* <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      /> */}
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
            />
            <Noise opacity={0.02} />
            <Glitch
              delay={[0.2, 3.5]} // min and max glitch delay
              duration={[0.6, 5.0]} // min and max glitch duration
              strength={[0.01, 0.3]} // min and max glitch strength
              mode={GlitchMode.CONSTANT_MILD} // glitch mode
              active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
              ratio={0.2} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
            />
          </EffectComposer>
        </Canvas>
      )}
    </>
  )
}
