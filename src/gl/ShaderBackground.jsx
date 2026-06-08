import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { pointer, scroll } from '../store/frame'
import { useAppStore } from '../store/useAppStore'
import { vertexShader, fragmentShader } from './shaders/background'

// Full-screen neon-fog quad. Uniforms are mutated directly each frame; the
// component itself never re-renders.
export default function ShaderBackground() {
  const matRef = useRef()
  const { size, viewport } = useThree()
  const reducedMotion = useAppStore((s) => s.reducedMotion)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uScroll: { value: 0 },
      uMotion: { value: reducedMotion ? 0 : 1 },
    }),
    [reducedMotion],
  )

  useFrame((state) => {
    const u = matRef.current?.uniforms
    if (!u) return
    u.uTime.value = state.clock.elapsedTime
    u.uResolution.value.set(size.width * viewport.dpr, size.height * viewport.dpr)
    // smooth the pointer + scroll toward their raw targets
    u.uMouse.value.x += (pointer.x - u.uMouse.value.x) * 0.06
    u.uMouse.value.y += (pointer.y - u.uMouse.value.y) * 0.06
    u.uScroll.value += (scroll.value - u.uScroll.value) * 0.05
  })

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  )
}
