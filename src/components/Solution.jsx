import React from 'react'
import Simg from '../assets/sol.png'

const Solution = () => {
  return (
    <div className="relative">
      <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8'>
        <div className="relative">
          <h2 style={{fontSize:50}} className='text-center text-NormalHeader'>Une Solution Pour:  </h2>
          <img src={Simg} alt='' className='w-full' style={{ filter: 'brightness(100%)' }} />
          <div className=" absolute inset-0 flex items-center justify-center text-center">
            <div className=" p-6 rounded-lg">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution ;