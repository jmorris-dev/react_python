import React from 'react';

const img_style = {object_fit: "cover", width: "50%", height: "250px"}

function InfoCard({image}) {
  return (
    <div>
        {image ?
          <>
          <img style={img_style} src={"/images/" + image.image} alt={image.title}/>
          <p>Title: {image.title}</p>
          <p>Description: {image.description}</p>
          <p>Tags: {image.tags}</p>
          </>
          : <p>loading...</p>
        }
    </div>
  );
}

export default InfoCard;