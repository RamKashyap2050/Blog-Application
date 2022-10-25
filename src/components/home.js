import React from 'react'
const Home = () => {
  return (
  <div className="bg-image">
  <img src={"https://wallpapercave.com/wp/wp4203443.jpg"}  alt='hey' />
  <div className="mask" style={{backgroundColor : "rgba(0, 0, 0, 0.6)"}}>
    <div className="text">
      <h1>MTL BLog</h1>
    </div>
    <div className='container'>
      <div className='row'>
      <div className='col-sm'>
          <a href='!#' className='btn btn-outline-info'>About</a>

     </div>
      <div className='col-sm'>
          <a href='!#' className='btn btn-outline-info'>Contact</a>
      </div>
      </div>
     </div>
   
  </div>
</div>
  )
}

export default Home
