import React from 'react'

const Footer = () => {
    const gradientBackground = {
      background: 'linear-gradient(270deg, #5974E9 0%, #9859E9 100%)',
    };
  
    return (
      <div style={gradientBackground} className="mt-2 h-[600px]">
        <div className="px-4 lg:px-14  mx-auto ">
            {/* Content of your div */}
            <div className='md:px-14 px-4 py-20 '>
                <h2 style={{ fontSize: '3.5rem' }} className='text 5x1 text-white font-bold mb-2'>NursyAi </h2>
                <p style={{ fontSize: '1.5rem' }} className='text-white font-light mt-10'>About</p>
                <p style={{ fontSize: '1.5rem' }} className='text-white font-light mt-10'>Fonctionnalités</p>
                <p href ='#'style={{ fontSize: '1.5rem' }} className='text-white font-light mt-10'>Contact</p>

            </div>
            <p className='text-center text-white font-light'>© Copyright 2023 | NursyAI | All Rights Reserved |</p>

        </div>
      </div>
  
    );
  };
  

export default Footer