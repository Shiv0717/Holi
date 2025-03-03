import React from 'react';

const Colors = ({ image, text1, text2, text3, reverse }) => {
  return (
    <div className="w-full px-4 lg:px-0 flex items-center justify-center py-5" style={{ fontFamily: 'josh, sans-serif' }}> {/* Add vertical padding for better centering */}
      <div className={`flex flex-col gap-5 items-center justify-center 
                      lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Image Section */}
        <div className="w-full flex justify-center lg:w-auto">
          <img className='pt-3 w-64 sm:w-80 lg:w-[400px] max-w-full' src={image} alt="color" />
        </div>

        {/* Text Section */}
        <div className='flex flex-col text-center px-5 lg:px-5 lg:text-left 
                        justify-center text-base sm:text-lg md:text-xl lg:text-2xl gap-4 lg:gap-5 
                        max-w-[500px] lg:max-w-[600px]'
             style={{ fontFamily: 'jost, sans-serif' }}>
          
          {/* Each Text Row */}
          <div className='flex items-center justify-center lg:justify-start gap-2 lg:gap-4'>
            <i className="fas fa-check" style={{ color: 'green', fontSize: '24px' }}></i>
            <h1 className='font-semibold leading-snug text-center lg:text-left break-words'>
              {text1}
            </h1>
          </div>
          <div className='flex items-center justify-center lg:justify-start gap-2 lg:gap-4'>
            <i className="fas fa-check" style={{ color: 'green', fontSize: '24px' }}></i>
            <h1 className='font-semibold leading-snug text-center lg:text-left break-words'>
              {text2}
            </h1>
          </div>
          <div className='flex items-center justify-center lg:justify-start gap-2 lg:gap-4'>
            <i className="fas fa-check" style={{ color: 'green', fontSize: '24px' }}></i>
            <h1 className='font-semibold leading-snug text-center lg:text-left break-words'>
              {text3}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
