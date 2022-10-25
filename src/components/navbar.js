import React from 'react'
import FilterBySearch from './searchblog'
import { Outlet, link, Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar = ({aboutblog}) => {
  return (
    /*<div className='navbar'>
      <nav>
        <ul>
            <li><a href='#'>About</a></li>
            <li><a href='#'>New Blog</a></li>
            <li><a href='#'>Show Blogs</a></li>
        </ul>
      </nav>
    </div>*/
   <>
    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">

<div >
  <div className="navbar-nav">
    <Link to='/'><button className="btn">Home</button></Link>
    <Link to='/about'><button className="btn" onClick={aboutblog}>About</button></Link>
    <Link to='/addmoreblog'><button className="btn" >Add New Blog</button></Link>
    <Link to='/showmoreblog'><button className="btn">Show All Blogs</button></Link>

  </div>
</div>
<div className='form-search'>

<input className="form-search sm" type="search" placeholder="Search" aria-label="Search" id='searchinput'/>&nbsp;
<Link to='/filteredsearch'><button className='btn btn-primary btn-sm' onClick={(e) => {e.target.value = ''}} >Search</button>
</Link>

</div>

</nav>
<Outlet />
   </>

  )
}

export default Navbar
