import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"


export default function Header() {
  return ( 
    <nav className="navbar">
      <div className="navbar_logo">
       <img src="logo.png" alt="Logo"/>
      </div>
      <NavLink to="/">Accueil</NavLink>
      <Link to="/about">
      <div>A propos</div>
      </Link>
    </nav>
     
  ) 
      
  
}