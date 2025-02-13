import React from 'react';
import aboutimage from '../images/about.png';

const About = () => {
  return (
    <div className='about'  id="about">
        <div>
            <img src={aboutimage} alt="" />
        </div>

        <div className='about-us'>
            <div className='heading'>
                <h1>LEARN MORE ABOUT US</h1>
            </div>
           
           <div className='para'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corporis temporibus iste. Vero, 
                  nesciunt minus labore odio voluptates facere voluptatibus perspiciatis ipsa nam iure. Quae.</p>
           </div>
           

           <div className='read-btn'>
               <button>READ MORE</button>
           </div>
          
        </div>
    </div>
  )
}

export default About