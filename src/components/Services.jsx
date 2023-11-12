import React from 'react';
import './sheet.css';
import line from '../assets/Line 2.svg'

const Services = () => {
    const services = [
        { id: 1, title: "Satisfaction De Client", image: "/src/assets/Vector.png" },
        { id: 2, title: "Bien-être de l'Infirmier", image: "/src/assets/Vecotr2.png" },
        { id: 3, title: "Rentabilité Hospitalière", image: "/src/assets/Vector3.png" }

    ]
    const sponsors = [{ id: 1, image: "/src/assets/sp1.png" },
    { id: 1, image: "/src/assets/sp2.png" },
    { id: 2, image: "/src/assets/sp3.png" }
    ]

    const fcts = [
        {id: 1, title:"ChronoSoins:",description:" L'intervention rapide qui compte.", image: "/src/assets/fct1.png"},
        {id: 2, title:"ForMe Plus:",description:" L'IA optimisée au service du bien-être du patient" ,image: "/src/assets/fct2.png"},
        {id: 3, title:"Opti-Tâches:",description:" L'IA qui classe efficacement les demandes des patients et optimise la répartition des tâches", image: "/src/assets/fct3.png"}


    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2x1 mx-auto'>
            <div>
                <h2 style={{ fontSize: '3.5rem' }} className='text 4x1 text-NormalHeader font-bold mb-2'>Notre Mission </h2>
                
                <p style={{ fontSize: '1.4rem' }}
                    className='text-SmallText'
                >Notre mission est de rapprocher patients et infirmiers en optimisant la communication, créant ainsi une expérience de soins exceptionnelle. Avec notre solution, l'avenir des soins de santé commence aujourd'hui.
                </p>
            </div>
            {/* cards */}


            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12' style={{ marginTop: '100px' }}>
                {
                    services.map(service => <div key={service.id} className='px-4 py-1 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full' style={{
                        background: 'linear-gradient(180deg, #5974E9 0%, #9859E9 100%)',
                    }}>
                        <div className='h-full flex flex-col justify-center items-center'>
                            <div><img src={service.image} alt='' /></div>
                            <h4 className='text-2xl font-bold text-white mb-2 px-2'>{service.title}</h4>
                        </div>
                    </div>)
                }

            </div>


            {/* Sponsors */}
            <div style={{ marginTop: '100px' }}>
                <h2 style={{ fontSize: '3.5rem' }} className='text 5x1 text-NormalHeader font-bold mb-2 text-center'>Nos Sponsors:</h2>

            </div>
            {/* cards sponsors*/}


            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    sponsors.map(service => <div key={service.id} >
                        <div className='h-full flex flex-col justify-center items-center'>
                            <div><img src={service.image} alt='' /></div>
                            <h4 className='text-2xl font-bold text-white mb-2 px-2'>{service.title}</h4>
                        </div>
                    </div>)
                }

            </div>

              {/* Nos Fonctionnalités : */}
              <div style={{ marginTop: '100px' }}>
                <h2 style={{ fontSize: '3.5rem' }} className='text 5x1 text-NormalHeader font-bold mb-2 text-center'> Nos Fonctionnalités :</h2>

            </div>
            {/* cards Fonctionnalités*/}


            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12' style={{ marginTop: '100px' }}>
                {
                    fcts.map(service => <div key={service.id} className='px-4 py-1 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full' style={{
                        background: 'linear-gradient(180deg, #5974E9 0%, #9859E9 100%)',
                    }}>
                        <div className='h-full flex flex-col justify-center items-center'>
                        <h4 className='text-2xl font-bold text-white mb-2 px-2'>{service.title}</h4>
                        <p style={{fontSize:15}}className='text-white'>{service.description}</p>
                            <div><img className='max-w-full max-h-full ' src={service.image} alt='' /></div>
                            
                        </div>
                    </div>)
                }

            </div>

        </div>

    )
}

export default Services