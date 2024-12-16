import React, { memo } from 'react'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Loader from './Components/Loader'
import Footer from './Components/pages/Footer'

const App = () => {
  return (
    <div className='min-h-screen w-full'>
      <Loader />
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default memo(App)