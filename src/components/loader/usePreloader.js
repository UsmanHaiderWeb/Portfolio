// Preloads critical assets (fonts + a few images) and reports real progress to
// the store. Resolves isLoaded once everything settles (or after a max wait).
import { useEffect } from 'react'
import { useAppStore } from '../../store/useAppStore'

const IMAGES = ['/UsmanNav.webp']
const FONTS = ['700 1em Orbitron', '500 1em "Chakra Petch"', '400 1em "Space Grotesk"']
const MIN_MS = 700 // keep the intro on screen briefly even on fast loads
const MAX_MS = 6000 // never hang forever on a stalled asset

export function usePreloader() {
  const setLoadProgress = useAppStore((s) => s.setLoadProgress)
  const setLoaded = useAppStore((s) => s.setLoaded)

  useEffect(() => {
    let alive = true
    let done = 0
    const total = IMAGES.length + 1 // +1 = the font batch
    const bump = () => {
      done += 1
      if (alive) setLoadProgress(Math.min(done / total, 1))
    }

    const imgTasks = IMAGES.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image()
          img.src = src
          const finish = () => {
            bump()
            resolve()
          }
          ;(img.decode ? img.decode() : Promise.resolve()).then(finish, finish)
        }),
    )

    const fontTask = (document.fonts
      ? Promise.all(FONTS.map((f) => document.fonts.load(f).catch(() => {})))
      : Promise.resolve()
    ).then(bump)

    const started = performance.now()
    const settle = () => {
      if (!alive) return
      const wait = Math.max(0, MIN_MS - (performance.now() - started))
      setTimeout(() => alive && setLoaded(true), wait)
    }

    Promise.all([...imgTasks, fontTask]).then(settle)
    const guard = setTimeout(() => {
      if (alive) {
        setLoadProgress(1)
        setLoaded(true)
      }
    }, MAX_MS)

    return () => {
      alive = false
      clearTimeout(guard)
    }
  }, [setLoadProgress, setLoaded])
}
