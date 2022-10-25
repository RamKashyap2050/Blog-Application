import React from 'react'
import { useState } from 'react';
import Navbar from './navbar';
import { FaTimes } from 'react-icons/fa'
const Searchblog = ({ blogs }) => {
  //const [filteredblog, setFilteredblog] = useState(blogs);
  /*const filterBySearch = (event) => {
      // Access input value
      const query = event.target.value;
      // Create copy of item list
      var updatedList = [...blogs];
      // Include all elements which includes the search query
      updatedList = updatedList.filter((item) => {
        return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      // Trigger render with updated values
      setFilteredblog(updatedList);
    };*/

  const query = document.getElementById('searchinput').value
  return (
<div className='p-5'>
{blogs.filter((blog) => {
  if(blog.heading.toLowerCase().includes(query.toLowerCase())){
    return blog}
  }
  ).map((blog, key) => {
return(
  <div className='blogcontainer' key={key}>
    <h2>{blog.heading} &nbsp;&nbsp;&nbsp;<FaTimes style={{color:'red',cursor: 'pointer' }} /></h2>
    <p>{blog.content}</p>
    <p>{blog.conclusion}</p>
    </div>
);

  }

  )
}

</div>

  );
}


export default Searchblog
