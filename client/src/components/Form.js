import React from 'react'

const axios = require('axios');

const Form = () => {
   const handleSubmit = (e) => {
     e.preventDefault();
     const formData = new FormData(e.target)
     axios.post('/api', formData, 
      {headers: {'content-type':'multipart/form-data'}
      }
    )
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" />
        <input type="text" name="title" />
        <input type="text" name="description" />
        <input type="text" name="tags" />
        <input type="submit" />
      </form>
    </>
    )
  }

export default Form

