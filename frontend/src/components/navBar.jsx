import React from 'react'

import { NavLink } from "react-router-dom";


const Navbar = () => {
  
    return (
      <>
       <nav>
        <ul>
          <li>
            <NavLink
              className
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className
              to="/about"
            >
              About
            </NavLink>
          </li>
            <li>
              <NavLink
                className
                to="/sign-up"
              >
                SignUp
              </NavLink>
            </li>
        
            <li>
              <NavLink
                className
                to="/login"
              >
                Login
              </NavLink>
            </li>
    
            <li>
              <a>
                Logout
              </a>
            </li>
         
            <li>
              <NavLink
                className
                to="/profile"
              >
                profile
              </NavLink>
            </li>
     
        </ul>
      </nav>
      </>
    )
}

export default Navbar