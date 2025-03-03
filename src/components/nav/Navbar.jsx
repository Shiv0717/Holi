import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full">
       <nav className='lg:px-80 pt-4 pb-4 lg:pt-5 lg:pb-5' style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="flex justify-center"> {/* Added wrapper for center alignment */}
            <ul className='lg:flex lg:items-center backdrop-blur-lg bg-white/30 border border-white/60 
                           lg:px-10 rounded-full lg:justify-center lg:py-4 lg:text-2xl 
                           lg:gap-15 text-base px-1 py-2 flex items-center gap-3 
                           justify-center w-full lg:w-auto'>
                <li className='bg-white/70 border border-white/80 lg:px-5 lg:py-2 lg:text-black rounded-full 
                               lg:text-xl px-2 py-2 text-sm text-gray-800' style={{ fontFamily: 'Inter, sans-serif' }}>
                    <a href="#">Home</a>
                </li>
                <li className='lg:text-black lg:rounded-full lg:text-xl text-sm text-gray-800'>
                    <a href="#">Tickets</a>
                </li>
                <li className='lg:text-black lg:rounded-full lg:text-2xl text-sm text-gray-800'>
                    <a href="#">Food</a>
                </li>
                <li className='lg:text-black lg:rounded-full lg:text-2xl text-sm text-gray-800'>
                    <a href="#">Timelines</a>
                </li>
                <li className='lg:text-black lg:rounded-full lg:text-2xl text-sm text-gray-800'>
                    <a href="#">About Us</a>
                </li>
            </ul>
        </div>
       </nav>
    </div>
  )
}

export default Navbar
