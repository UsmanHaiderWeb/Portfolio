import React, { memo } from 'react'
import MainContent from './Components/MainContent'
import Footer      from './Components/pages/Footer'

const App = () => (
  <div className='min-h-screen w-full bg-base'>
    <MainContent />
    <Footer />
  </div>
)

export default memo(App)
