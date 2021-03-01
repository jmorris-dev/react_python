import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import InfoCard from '../components/InfoCard';

const axios = require('axios');

const notSorted = (image) => {
    return image.isSorted === false;
};


const SortPage = () => {

    const [image, setImage] = useState();

    const getImage = () => {
        axios.get('http://localhost:5000/api')
        .then((res) => {
        const data = res.data.find(notSorted)
        setImage(data);
        })
    }


    useEffect(()=>{
        getImage()
    }, [])

        return (
            <div>
                <Form />
                <InfoCard image={image}/>
            </div>
        )
    }

export default SortPage
