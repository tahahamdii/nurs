import React, { useEffect, useState } from 'react';
import logo from '../assets/loog.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Assuming you're using react-icons for the icons
import { Link } from "react-scroll";
import './sheet.css';
import ButtonGroup from 'flowbite-react/lib/esm/components/Button/ButtonGroup';


const Navbar = () => {

    const gradientText = {
        background: 'linear-gradient(180deg, #5974E9 0%, #9859E9 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '1.5rem', // Size may be adjusted based on your design
      };

      const buttonStyle = {
        borderRadius: '12px',
        background: 'linear-gradient(180deg, #9859E9 0%, #5974E9 100%)',
      };
    

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Set Toggle Menuu 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });

    // navitems ///
    const navItems = [
        { link: "Acceuil", path: "home" },
        { link: "Fonctionnalités", path: "function" },

    ];
    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href='' className='text-2x1 font-semibold flex items-center space-x-3'><img src={logo} alt='' className='w-10 inline-block items-center' /><span style={gradientText} className='text-LogoText ' id='logo'>NursyAi</span></a>
                    {/* nav items for lager devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    className="block text-base text-NormalHeader first:font-medium text-link-underline"
  
                                >
                                    {link}
                                </Link>
                            ))
                        }

                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center' alt="button">
                        <button className='bg-LogoText text-white py-2 px-4 transition-all duration-300 rounded hover:bg-NormalHeader' style={buttonStyle}>Contacter nous</button>
                    </div>


                    {/* menu button for mobile */}
                    <div className='md:hidden'>
                        <button 
                        onClick={toggleMenu}
                        className=' text-LogoText focus:outline-none hover:text-gray-500'>
                            {
                                isMenuOpen ? (<FaTimes className='h-6 w-6' />) : (<FaBars className='h-6 w-6 ' />)
                            }

                        </button>

                    </div>

                </div>

                {/* nav items for mobile dev */}
                <div style={buttonStyle} className={`space-y-4 px-4 mt-16 py-7 bg-LogoText ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({link, path}) =>   <Link
                        key={path}
                        to={path}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        className="block text-base text-white hover:text-SmallText first:font-medium"
                    >
                        {link}
                    </Link>)
                    }
                </div>
            </nav>
                           
        </header>

    );
};

export default Navbar