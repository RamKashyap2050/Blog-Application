import React from 'react'
import user1 from '../user1.png'
import user2 from '../user2.png'
import user3 from '../user3.png'
const About = () => {
  return (
    <div id='about'>
        <h1 class="display-4">MTL Blog</h1><br />
  <h2>Our Team</h2><br />
  <h3 className='font-italic'>&#8221; Its not what you look at that matters. Its what you see &#8221;</h3><br />
  <h6>We are Montreal Bloggers<br /> who travel and wander in and around montreal and explore about different places </h6>
<div className='row justify-content-between'>
<div class="card" style={{width:"400px"}}>
  <img class="card-img-top" src={user1} alt="Car" />
  <div class="card-body">
    <h4 class="card-title">Sarah Jones</h4>
    <p class="card-text">I'm and Avid Mountaineer with experience of Trekking and Hiking of three years</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
<div class="card" style={{width:"400px"}}>
  <img class="card-img-top" src={user2} alt="Car" />
  <div class="card-body">
    <h4 class="card-title">Sean Parker</h4>
    <p class="card-text">I'm a Foodie who loves to try new cuisine and explore new kinds of food</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
<div class="card" style={{width:"400px"}}>
  <img class="card-img-top" src={user3} alt="Car" />
  <div class="card-body">
    <h4 class="card-title">Rachel Chu</h4>
    <p class="card-text">I'm a Wildlife Photograpger and videographer who has been travelling and doing photography for 4 years </p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
</div>
    </div>
  )
}

export default About;
