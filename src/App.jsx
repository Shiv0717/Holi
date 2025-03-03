import React from 'react'
import Landing from './components/landing/Landing'
import Colorspage from './components/colors/Colorspage'
import Event from './components/event/Event'
import Footer from './components/footer/Footer'
import FooterCopyright from './components/FooterCopyright/FooterCopyright'
import Pass from './components/pass/Pass'

const App = () => {
  return (
    <div>
       <Landing/>
       <Pass/>
       <Colorspage/>
       <Event/>
       <Footer/>
      <FooterCopyright/>
    </div>
  )
}

export default App
