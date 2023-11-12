import React, { useState, useEffect } from 'react';
import "./Header.css";
import heart from '../Header/1.svg'
import needle from '../Header/2.svg'
import doctor from '../Header/3.svg'
import center1 from '../Header/image3.png'
import center2 from '../Header/image4.png'
import center3 from '../Header/image5.png'



const Header = () => {
  const images = [center2, center1, center3]; // Array of image sources
  const texts = ["Votre santé, notre IA La clé dune communication fluide", "Le futur des soins de santé commence ici. Etes-vous prèt ?", "Optimisez les soins de santé avec notre IA au service des patients et des infirmier", "Boostez la rentabilité de votre hôpital grâce à notre IA : Réduisez les coûts, améliorez les soins"]; // Array of texts

  const [imageIndex, setImageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((imageIndex + 1) % images.length);
    }, 3000);

    const textInterval = setInterval(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
  }, [imageIndex, textIndex, images.length, texts.length]);



  return (
    <div>
      <div className="headerContainer">
        <h1 className="responsiveH1" style={{ opacity: 1 }}>{texts[textIndex]}</h1>
        {/* ... rest of your component */}
      </div>    <div className="box">


        <div className="group">
          <div className="overlap">
            <div className="circles">
              <div className="overlap-group">
                <div className="ellipse" />
                <div className="div">
                  <img src={images[imageIndex]} style={{ opacity: 1 }} />
                </div>
                <div className="ellipse-2" />
              </div>
            </div>
            <div className="shapes">
              <div className="frame">
                <div className="img-wrapper">
                  <img className="solar-health-bold" alt="Solar health bold" src={heart} />
                </div>
              </div>
              <div className="doctor-wrapper">
                <div className="img-wrapper">
                  <img className="maki-doctor" alt="Maki doctor" src={needle} />
                </div>
              </div>
              <div className="vaccin-wrapper">
                <div className="vaccin">
                  <img className="tabler-vaccine" alt="Tabler vaccine" src={doctor} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;