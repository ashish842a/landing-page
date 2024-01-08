import React from 'react';
import Add from './Add';
import '../Addvertisement/Advertisement.css'


const images = [
    '/assets/images/prologis.png',
    '/assets/images/tower.png',
    '/assets/images/equinix.png',
    '/assets/images/realty.png'
];

const Advertisement = () => {
    return (
        <div className='advertisement-box'>
            <Add image={images} />
        </div>
    );
};

export default Advertisement;
