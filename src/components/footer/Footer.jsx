import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5 lg:mt-10'>
      <div className='flex flex-col lg:flex-row lg:gap-10 lg:justify-between items-center text-center lg:text-left' style={{ fontFamily: 'josh, sans-serif' }}>
        
        {/* QR Code Section */}
        <div className='mb-5 lg:mb-0'>
          <img className='w-40 lg:w-50 mx-auto lg:ml-20' src={'/qrcode.png'} alt="QR Code" />
          <h1 className='mt-2 lg:ml-23 font-semibold'>Scan QR for the map</h1>
        </div>

        {/* Navigation Links */}
        <div className='mb-5 lg:mb-0'>
          <ul className='flex flex-col lg:items-start items-center gap-2 lg:gap-4 font-semibold text-lg lg:text-xl' style={{ fontFamily: 'josh, sans-serif' }}>
            <li>Home</li>
            <li>Buy Tickets</li>
            <li>Timelines</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Sponsors and Media Partners */}
        <div className='mb-5 lg:mb-0 flex flex-col items-center lg:items-start gap-2 font-semibold' style={{ fontFamily: 'josh, sans-serif' }}>
          <h1 className='text-xl'>Sponsored By:</h1>
          <div className='flex items-center gap-2'>
            <img className='w-10 lg:w-10' src={'/vijetha.png'} alt="Vijetha Softwares" />
            <p>Vijetha Softwares Pvt. Ltd.</p>
          </div>

          <h1 className='mt-4'>Media Partners:</h1>
          <div className='flex items-center gap-2'>
            <img className='w-16 lg:w-20' src={'/vizag.png'} alt="Mana Vizag TV" />
            <p>Mana Vizag TV</p>
          </div>
          <div className='flex items-center gap-2'>
            <img className='w-16 lg:w-20' src={'/mana.png'} alt="Red FM" />
            <p>93.5 Red FM</p>
          </div>

          <h1 className='mt-4'>Ticketing Partner:</h1>
          <div className='flex items-center lg:mb-4 gap-2'>
            <img className='w-10 lg:w-10' src={'/show.png'} alt="Book My Show" />
            <p className=''>Book My Show</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className='mb-5 lg:mb-0 lg:mr-10'>
          <div className='font-semibold flex flex-col  items-center lg:items-start gap-2'>
            <h1>+91 8309057182</h1>
            <h1>yosang@c1events.com</h1>
            <h1>Andhra Pradesh, Vizag</h1>
          </div>
          <div className="flex gap-4 text-2xl">
        <a href="#" className="text-pink-500"><i className="fa-brands fa-instagram"></i></a>
        <a href="#" className="text-green-500"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="#" className="text-blue-600"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" className="text-red-600"><i className="fa-brands fa-youtube"></i></a>
        <a href="#" className="text-black" aria-label="Twitter (X)">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
