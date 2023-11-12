import React from 'react';
import aboutImg from '../assets/Group 3.png';

const Heart = () => {
  return (
    <div className="relative">
      <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8'>
        <div className="relative">
          <img src={aboutImg} alt='' className='w-full' style={{ filter: 'brightness(70%)' }} />
          <div className=" bg-white bg-opacity-50 absolute inset-0 flex items-center justify-center text-center">
            <div className=" p-6 rounded-lg">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heart;
