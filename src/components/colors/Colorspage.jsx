import React from 'react';
import Colors from './Colors';

const Colorspage = () => {
  return (
    <div className=' relative' style={{ fontFamily: 'josh, sans-serif' }}>
      {/* First Colors Component - Normal Layout */}
      <div className=' absolute'>
        <img className='lg:w-70 w-30' src='/border-left.png'></img>
      </div>
      <Colors
        image='/Frame4.png'
        text1="Frame life with the colors  love & happiness today and always"
        text2="It’s time to add some colour to our life, celebrate Holi with us"
        text3="Eco - Friendly colors, painted with care for you"
      />
      
      {/* Second Colors Component - Row-Reversed Layout for Larger Screens */}
      <Colors
        image='/Frame3.png'
        text1="Brunch done right, fresh and delightful"
        text2="Fresh ingredients, endless possibilities"
        text3="From chole buture to rasmalai, we’ve got you covered"
        reverse={true} // Passing prop to indicate reverse
      />
      <div className=' absolute right-0 bottom-0'>
        <img className='lg:w-70 w-30' src='/border-right.png'></img>
      </div>
      
    </div>
  );
};

export default Colorspage;
