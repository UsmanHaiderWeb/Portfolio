// Per-frame channels read by the WebGL layer inside useFrame. These are mutated
// directly (no setState) so updating them every frame never re-renders React.
//
// pointer: normalized 0..1 screen coords, origin top-left (y grows downward).
// scroll:  normalized 0..1 page scroll progress.
// hover:   0..1 intent flag raised when the pointer is over an interactive
//          element — the cursor trail brightens toward it.
export const pointer = { x: 0.5, y: 0.5 }
export const scroll = { value: 0 }
export const hover = { value: 0 }
