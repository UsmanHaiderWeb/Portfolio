// Discrete app state (changes rarely). Per-frame values (pointer / scroll) live
// in ./frame.js as plain mutable objects so the GL layer can read them inside
// useFrame without triggering React re-renders.
import { create } from 'zustand'

export const useAppStore = create((set) => ({
  // loader / intro
  loadProgress: 0, // 0..1
  isLoaded: false, // assets finished preloading
  introDone: false, // intro reveal finished -> unlock scroll + ambient motion

  // capability flags (set once at boot)
  reducedMotion: false,
  isTouch: false,
  webglEnabled: true,

  setLoadProgress: (p) => set({ loadProgress: p }),
  setLoaded: (v) => set({ isLoaded: v }),
  setIntroDone: (v) => set({ introDone: v }),
  setCapabilities: (caps) => set(caps),
}))
