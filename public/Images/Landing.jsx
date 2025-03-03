import React from 'react'
import Navbar from '../nav/Navbar'

const Landing = () => {
  return (
    <div className="relative">
      {/* Video Section */}
      <video className="w-full object-cover" loop autoPlay muted>
      <source src="/public/FILE.mp4" type="video/mp4" />
      </video>

      {/* "Happy" Text */}
      <h1 className="absolute top-25 lg:top-1/6 left-1/2 lg:left-1/2 transform -translate-x-1/2 z-10 text-white lg:text-[10rem] text-3xl font-bold" style={{ fontFamily: 'Kaushan Script, sans-serif' }}>
        Happy
      </h1>

      {/* "Holi" Text */}
      <h1 className="absolute top-34 lg:top-1/3 left-1/2 transform -translate-x-1/2 z-10 text-white lg:text-[28rem] text-7xl font-bold" style={{ fontFamily: 'josh, sans-serif' }}>
        Holi
      </h1>

      {/* Navbar on top of the video */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
    </div>
  )
}

export default Landing
