import React from 'react'

const Footer = () => {
  return (
      <div >

<footer className="text-center text-lg-start">
  <div className="container d-flex justify-content-center py-5">
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
      <i className="fa fa-facebook-f"></i>
    </button>
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
      <i className="fa fa-youtube"></i>
    </button>
    <button type="button" className="btn btn-primary " >
      <i className="fa fa-instagram"></i>
    </button>
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
      <i className="fa fa-twitter"></i>
    </button>
  </div>

  <div class="text-center text-white p-3">
    © 2020 Copyright:
    <a class="text-white" href="https://www.mtlblog.com/">MTLBlog.com</a>
  </div>
</footer>


    </div>
  )
}

export default Footer
