import React, { memo } from 'react'
import LandingPage    from './pages/LandingPage'
import HeroAbout      from './pages/HeroAbout'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage   from './pages/ProjectsPage'
import SkillsPage     from './pages/SkillsPage'

// import Footer from './pages/Footer' — added in Section 6

const MainContent = () => (
  <main className='min-h-screen bg-base'>
    <LandingPage />
    <HeroAbout />
    <ExperiencePage />
    <ProjectsPage />
    <SkillsPage />
  </main>
)

export default memo(MainContent)
