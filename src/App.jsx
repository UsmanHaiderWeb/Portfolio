import React, { memo } from 'react'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import Loader from './Components/Loader'

const App = () => {
  return (
    <div className='min-h-screen w-full'>
      <Loader />
      <Header />
      <MainContent />
      <Footer/>
    </div>
  )
}

export default memo(App)