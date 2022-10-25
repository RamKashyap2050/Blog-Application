import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'


const Showallblogs = ({ blogs }) => {
     

  return (

<div className='p-5'>
{blogs.map((blog, key) => ( <div className='blogcontainer'  key={key}>
    <h2>{blog.heading}&nbsp;&nbsp;&nbsp;<FaTimes style={{color:'red',cursor: 'pointer' }} /></h2>
    <p>{blog.content}</p>
    <p>{blog.conclusion}</p>
    </div>))}
</div>

)
}

export default Showallblogs
