import React from 'react'
import { useState } from 'react'
import '../styles/header.css'
import logo from '../assets/logo.png'

export default function Header() {
        const [mdnav, setMdnav] = useState(false);

        const toggleMdnav = () => setMdnav(!mdnav);

  return (
        <header>
                <div><img id="nav_logo" src={logo} alt="little lemon logo" /></div>
                <nav>
                        <div id='menu' onClick={toggleMdnav}>
                                <hr />
                                <hr />
                                <hr />
                        </div>
                        <ul id='lg-nav'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#highlights">Menu</a></li>
                                <li><a href="#">Reservations</a></li>
                                <li><a href="#">Order Online</a></li>
                                <li><a href="#">Login</a></li>
                        </ul>

                        <div id="md-nav" style={{display: mdnav ? 'block' : 'none'}}>
                                <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#highlights">Menu</a></li>
                                        <li><a href="#">Reservations</a></li>
                                        <li><a href="#">Order Online</a></li>
                                        <li><a href="#">Login</a></li>
                                </ul>
                                <div id='close' onClick={toggleMdnav}>X</div>
                        </div>
                </nav>
        </header>
  )
}
