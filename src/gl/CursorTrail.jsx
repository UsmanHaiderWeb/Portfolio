import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { pointer, hover } from '../store/frame'
import { vertexShader, fragmentShader } from './shaders/trail'

const COUNT = 48

// Flowing neon trail rendered as additive points inside the shared canvas.
// History is a ring of recent pointer positions; each frame we unshift the
// current pointer and rewrite the position buffer in clip space.
export default function CursorTrail({ dpr = 1 }) {
  const geomRef = useRef()
  const matRef = useRef()

  const { positions, ages, history } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3)
    const ages = new Float32Array(COUNT)
    const history = Array.from({ length: COUNT }, () => ({ x: 0.5, y: 0.5 }))
    for (let i = 0; i < COUNT; i++) ages[i] = i / (COUNT - 1)
    return { positions, ages, history }
  }, [])

  const uniforms = useMemo(
    () => ({
      uDpr: { value: dpr },
      uSize: { value: 26 },
      uColorA: { value: new THREE.Color('#9bf60a') }, // head: lime
      uColorB: { value: new THREE.Color('#e018c8') }, // tail: magenta
      uHover: { value: 0 },
    }),
    [dpr],
  )

  useFrame(() => {
    // newest position at the head
    history.unshift({ x: pointer.x, y: pointer.y })
    history.pop()

    for (let i = 0; i < COUNT; i++) {
      const h = history[i]
      // screen 0..1 (top-left origin) -> clip space -1..1
      positions[i * 3] = h.x * 2 - 1
      positions[i * 3 + 1] = (1 - h.y) * 2 - 1
      positions[i * 3 + 2] = 0
    }
    const attr = geomRef.current?.attributes.position
    if (attr) attr.needsUpdate = true

    const u = matRef.current?.uniforms
    if (u) u.uHover.value += (hover.value - u.uHover.value) * 0.12
  })

  return (
    <points frustumCulled={false}>
      <bufferGeometry ref={geomRef}>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aAge" args={[ages, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthTest={false}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
