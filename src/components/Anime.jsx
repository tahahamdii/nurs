import React from 'react';
import './sheet.css'; // Import your CSS file

const Anime = () => {
    return (
        <div className="container">
            <div className="sun">
                <div className="mercury">
                    <img src="image0.png" className="first" alt="First" />
                    <img src="image2.png" className="second" alt="Second" />
                </div>
                <img src="image5.png" className="sun-image" alt="Sun" />
            </div>
        </div>
    );
};

export default Anime;
