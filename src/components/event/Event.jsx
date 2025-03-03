import React from 'react'
import './event.css'
const Event = () => {
  return (
    <div className='relative'>
        <div className="bg-custom">
        </div>
        <div className=' absolute'>
        <img className='lg:w-70 w-30' src='/Images/border-left.png'></img>
        </div>
       <h1 className=' text-xl px-4 lg:text-5xl text-center  lg:pt-4 lg:pb-4 lg:px-50 pt-5 pb-5 font-medium'  style={{ fontFamily: 'jost, sans-serif' }}>From Gourmet Plates to Crafted Cocktails – Holi Done Right!</h1>
       <div>
         <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-30'>
            <div className='flex flex-col  items-center'>
                <img className='w-50 lg:w-100  max-w-full' src='/Frame 355.png'></img>
                 <h1 className='lg:text-xl lg:w-90 lg:text-center lg:font-semibold font-medium px-5 py-5 lg:px-3 lg:py-3 text-center'  style={{ fontFamily: 'jost, sans-serif' }}>Savor the flavors of holi - buy a plate, love everybite!</h1>
            </div>
            <div className='flex flex-col  items-center' >
                <img className='w-50 lg:w-100  max-w-full' src='/Frame6.png'></img>
                 <h1 className='lg:text-xl lg:w-90 lg:text-center lg:font-semibold px-5 text-center py-5 lg:px-3 lg:py-3 '  style={{ fontFamily: 'jost, sans-serif' }}>Raise your glass responsibly - limited liquor,unlimited fun! ( 18+ only )</h1>
            </div>
         </div>
         <div className='flex  lg:px-65 pt-5'>
            <div className='flex flex-col lg:flex-row  items-center justify-center lg:items-center lg:gap-10'>
                <img className='lg:w-50 w-40' src={'/Images/Frame 345.png'}></img>
                <div className='flex flex-col lg:items-start lg:gap-2 items-center justify-center'  style={{ fontFamily: 'jost, sans-serif' }}>
                <h1 className='lg:text-3xl font-semibold  text-2xl'>Entry</h1>
                <p className='text-2xl'>6:00 - 8:00</p>
                <p className='px-5 lg:px-0 text-center text-xl'>May your day be as vibrant as your spirit! Happy Holi!".</p>
                </div>
           </div> 
         </div>

         <div className='flex   lg:px-80 pt-5'>
            <div className='flex flex-col lg:flex-row-reverse  lg:gap-10   items-center justify-center lg:items-center'>
                <img className='lg:w-50 w-40' src={'/Images/Frame 346.png'}></img>
                <div className='flex flex-col lg:items-end lg:gap-2 items-center justify-center'  style={{ fontFamily: 'jost, sans-serif' }}>
                <h1 className='lg:text-3xl  text-2xl font-semibold '>Inaugration and color blast</h1>
                <p className='text-2xl'>8:00</p>
                <p className='px-5 lg:px-0 text-center text-xl'>Step into a World of Colors – The Celebration Starts Now!.</p>
                </div>
           </div> 
         </div>

         <div className='flex  justify-center lg:justify-normal  lg:px-65 pt-5'>
            <div className='flex flex-col lg:flex-row   items-center justify-center lg:items-center lg:gap-10'>
                <img className='lg:w-50 w-40' src={'/Images/Frame 347.png'}></img>
                <div className='flex flex-col  lg:items-start lg:gap-2 items-center justify-center'  style={{ fontFamily: 'jost, sans-serif' }}>
                <h1 className='lg:text-3xl text-2xl font-semibold '>Open dance floor</h1>
                <p className='text-2xl'>8:00 - 10:00</p>
                <p className='px-5 lg:px-0 text-center text-xl'>Dance first. Think later.</p>
                </div>
           </div> 
         </div>
         
        

         <div className='flex justify-center lg:pl-35 pt-5 '>
            <div className='flex flex-col  items-center  lg:flex-row-reverse  lg:gap-10  '>
                <img className='lg:w-50 w-40' src={'/Images/Frame 350.png'}></img>
                <div className='flex flex-col  lg:items-end  lg:gap-2 items-center justify-center'  style={{ fontFamily: 'jost, sans-serif' }}>
                <h1 className='lg:text-3xl  text-2xl font-semibold '>Brunch</h1>
                <p className='text-2xl'>10:00 - 11:00</p>
                <p className='px-5 lg:px-0 text-center text-xl'>Brunch Starts Now – Colors Await!</p>
                </div>
           </div> 
         </div>

         <div className='flex   lg:px-65 pt-5'>
            <div className='flex flex-col lg:flex-row   items-center justify-center lg:items-center lg:gap-10'>
                <img className='lg:w-50 w-40' src={'/Images/Frame 351.png'}></img>
                <div className='flex flex-col lg:items-start lg:gap-2 items-center justify-center'  style={{ fontFamily: 'jost, sans-serif' }}>
                <h1 className='lg:text-3xl font-semibold '>Rain Dance</h1>
                <p className='text-2xl'>11:00 - 1:00</p>
                <p className='px-5 lg:px-0 text-center text-xl'>“Dance in the rain, and let your worries wash away.</p>
                </div>
           </div> 
         </div>
         <div className=' absolute bottom-[-8rem]'>
        <img className='lg:w-70 w-30' src='/Images/image 12.png'></img>
        </div>

        <div className=' absolute bottom-[-90px] right-0'>
        <img className='lg:w-70 w-30' src='/Images/image 14.png'></img>
        </div>
       </div>
       
    </div>
  )
}

export default Event
