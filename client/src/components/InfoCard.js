import React, { useState, useEffect } from 'react';

const axios = require('axios');

function InfoCard() {
  const [image, setImage] = useState();

  const getImage = () => {
    axios.get('/api')
    .then(function (res) {
      console.log(res)
      const notSorted = (image) => {
        return image.isSorted === false;
      }
      const data = res.data.find(notSorted)
      setImage(data);
    })
  }

  useEffect(()=>{
    getImage()
  }, [])

  return (
    // <InfoCard image={image} />
    <div>
        {image ?
          <>
          <p>title: {image.title}</p>
          <p>description: {image.description}</p>
          <p>tags: {image.tags}</p>
          <p>isSorted: {image.isSorted.toString()}</p> 
          <p>passed: {image.passed.toString()}</p>
          </>
          : <p>loading...</p>
        }
    </div>
  );
}

export default InfoCard;