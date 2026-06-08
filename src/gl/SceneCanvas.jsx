import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import ShaderBackground from './ShaderBackground'
import CursorTrail from './CursorTrail'
import { useAppStore } from '../store/useAppStore'

// The single persistent WebGL canvas. Fixed full-screen, behind all DOM, never
// captures pointer events. Pauses rendering when the tab is hidden.
export default function SceneCanvas() {
  const isTouch = useAppStore((s) => s.isTouch)
  const reducedMotion = useAppStore((s) => s.reducedMotion)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onVis = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  const trailEnabled = !isTouch && !reducedMotion
  const dprMax = isTouch ? 1.5 : 2

  return (
    <Canvas
      dpr={[1, dprMax]}
      gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
      frameloop={visible ? 'always' : 'never'}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ShaderBackground />
      {trailEnabled && <CursorTrail dpr={Math.min(window.devicePixelRatio || 1, dprMax)} />}
    </Canvas>
  )
}
