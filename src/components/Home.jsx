import React from 'react';
import img1 from '../assets/image0.png';
import img2 from '../assets/image1.png';
import img3 from '../assets/image2.png';
import './sheet.css'; // Import the CSS file for styling
import Header from '../components/Header/Header'
import bg from './bg.svg' ;

const Home = () => {
  const gradientBackground = {
    background: 'linear-gradient(270deg, #5974E9 0%, #9859E9 100%)',
  };

  const svgBackgroundStyle = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',

    
  };

  return (
    <div style={svgBackgroundStyle} className="mt-20 h-screen">
      <Header className='fixed'/>
    </div>
  );
};

export default Home;
