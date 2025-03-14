import React from 'react'
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

const Navbar = () => {
  
//assigning location variable
  const location = useLocation();
  
   //destructuring path name from location
   const {pathname} = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
        	<nav id="navbar" className="navbar">
          <ul>
            <li >
              <Link to ="/"  className={splitLocation[1] === "" ? "active" : ""}> Home</Link>
            </li>
            <li>
            <Link to ="/about"  className={splitLocation[1] === "about" ? "active" : ""}> About Us</Link>
            </li>
            <li>
            <Link to ="/Courses"  className={splitLocation[1] === "Courses" ? "active" : ""}> Courses</Link>
            </li>
            <li>
            <Link to ="/Terms"  className={splitLocation[1] === "careers" ? "active" : ""}> 
            Terms Conditions & Policies</Link>
            </li>
            <li>
            <Link to ="/contact"  className={splitLocation[1] === "contact" ? "active" : ""}> Contact Us</Link>
            </li>
          </ul>
        </nav>

    </>
  )
}

export default Navbar