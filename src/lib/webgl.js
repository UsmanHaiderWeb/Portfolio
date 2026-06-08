// Lightweight WebGL capability probe. Returns false on contexts that can't
// create a GL context (old browsers, blocked GPU) so we can fall back to a
// static gradient.
export function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}
