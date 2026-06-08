import { Suspense, lazy } from 'react'
import { useAppStore } from '../../store/useAppStore'

// Code-split the GL layer so three/R3F load after first paint (protects LCP).
const SceneCanvas = lazy(() => import('../../gl/SceneCanvas'))

// Layer 0: fixed full-screen WebGL canvas (or static gradient fallback), behind
// everything, pointer-events:none so the DOM stays clickable.
// Layer 1: the scrolling content.
export default function Layout({ children }) {
  const webglEnabled = useAppStore((s) => s.webglEnabled)

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        {webglEnabled ? (
          <Suspense fallback={<div className="absolute inset-0 bg-gradient-neon" />}>
            <SceneCanvas />
          </Suspense>
        ) : (
          <div className="absolute inset-0 bg-gradient-neon" />
        )}
      </div>

      <div className="relative z-10">{children}</div>

      {/* film grain over everything */}
      <div className="noise-overlay" aria-hidden="true" />
    </>
  )
}
