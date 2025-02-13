import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id="contact">
         <h1>CONTACT US</h1>
         <form>
            <input type="text" placeholder='Full Name' required/>
            <input type="email" placeholder='Type Your Email' required/>
            <textarea placeholder='Write Here........' name='message'></textarea>
            <input className='submit-btn' type='submit' value='SEND'/>
         </form>
    </div>
  )
}

export default Contact