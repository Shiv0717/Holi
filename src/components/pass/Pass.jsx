import React from 'react'

const Pass = () => {
  return (
    <div className=' relative'>
        <div className=' absolute'>
        <img className='lg:w-70 w-20' src='/Images/border-left.png'></img>
        </div>
      <div>
        <div className=' flex flex-col gap-5 items-center'>
            <h1 className='lg:text-9xl' style={{ fontFamily: 'Jockey One, sans-serif' }}>Buy passes</h1>
            <p  className='lg:text-4xl pb-5' style={{ fontFamily: 'Kaushan Script, sans-serif' }}>( Click to Buy )</p>
        </div>
        <div className=' flex flex-col gap-4 lg:gap-10'>
            <div className='flex items-center justify-center '>
                <img className='lg:w-[64rem] w-65' src='/Images/Frame 448.png'></img>
            </div>

            <div className='flex items-center justify-center'>
                <img className='lg:w-[64rem] w-65' src='/Images/Frame 446.jpg'></img>
            </div>

            <div className='flex items-center justify-center'>
                <img className='lg:w-[64rem] w-65' src='/Images/Frame 447.jpg'></img>
            </div>

        </div>
        
      </div>
      <div className=' absolute right-0 bottom-[-5rem] '>
        <img className='lg:w-70 w-20 ' src='/Images/border-right.png'></img>
        </div>
    </div>
  )
}

export default Pass
