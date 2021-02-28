import React, { useState, useEffect } from 'react';
import InfoCard from '../components/InfoCard';

const axios = require('axios');
const isSortedTrue = (image) => {
    return image.isSorted === true && image.passed===true;
}

const PassPage = () => {

    const [images, setImages] = useState();

    const getImages = () => {
        axios.get('http://localhost:5000/api')
        .then((res) => {
        const data = res.data.filter(isSortedTrue)
        console.log(data);
        setImages(data);
        })
    }

    useEffect(()=>{
        getImages()
    }, [])


        return (
            <div>
                {images ? 

                images.map((image, index) => (
                    <>
                    <InfoCard key={index} image={image}/> 
                    </>
                    )) : <p>...loading </p>}
            </div>
        )
    }

export default PassPage