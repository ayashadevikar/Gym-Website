import React, { useState } from "react";
import logo from '../images/logo.png';
import { FaBars, FaTimes  } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar' id="main">
        <div className='nav' >
          <Link to="main" smooth={true} duration={2000}> 
              <img src={logo} alt="logo-img" />
         </Link>
           
            <ul className={`hidden-list ${isOpen ? "active" : ""}`}> 
              <li><Link to="main" smooth={true} duration={1000}>Header</Link></li>
              <li><Link to="features" smooth={true} duration={1000}>Features</Link></li>
              <li><Link to="offer" smooth={true} duration={1000}>Offer</Link></li>
              <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
              <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
           </ul>


         {/* Menu Button for Mobile */}
     
           <div>
            <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
           </div>

       </div>

        
    </div>
  )
}

export default Navbar