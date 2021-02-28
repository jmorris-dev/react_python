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
        <input type="file" name="image" id="image"/>
        <div>
          <input type="text" name="title" id="title" placeholder="Title"/>
        </div>
        <div>
          <input type="text" name="description" id="descripton" placeholder="Description"/>
        </div>
        <div>
          <input type="text" name="tags" id="tags" placeholder="Tags"/>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </>
    )
  }

export default Form

