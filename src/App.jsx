import { useEffect } from 'react'
import { useCapabilities } from './hooks/useCapabilities'
import { usePointer } from './hooks/usePointer'
import { useLenis } from './hooks/useLenis'
import { ScrollTrigger } from './lib/gsap'
import { useAppStore } from './store/useAppStore'
import Layout from './components/layout/Layout'
import Header from './components/layout/Header'
import Loader from './components/loader/Loader'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Footer from './components/sections/Footer'

export default function App() {
  useCapabilities()
  usePointer()
  useLenis()

  const introDone = useAppStore((s) => s.introDone)

  // Recompute ScrollTrigger positions once the intro unlocks scroll + layout settles.
  useEffect(() => {
    if (!introDone) return
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [introDone])

  return (
    <>
      <Loader />
      <Layout>
        <Header />
        <main className="w-full flex flex-col">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Footer />
        </main>
      </Layout>
    </>
  )
}
