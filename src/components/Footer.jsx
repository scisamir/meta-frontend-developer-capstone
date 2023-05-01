import React from 'react'
import '../styles/footer.css'
import footlg from '../assets/footlg.png'

export default function Footer() {
  return (
        <footer>
                <div id='ftimg'><img src={footlg} alt="footer logo" /></div>
                <div id='doormat'>
                        <p>Doormat</p>
                        <p>Navigation</p>
                        <p>Home</p>
                        <p>About</p>
                        <p>Menu</p>
                        <p>Reservations</p>
                        <p>Order Online</p>
                        <p>Login</p>
                </div>
                <div id='contact'>
                        <p>Contact</p>
                        <p></p>
                        <p>Address</p>
                        <p>Phone Number</p>
                        <p>Email</p>
                </div>
                <div id='smedia'>
                        <p>Social Media Links</p>
                        <p></p>
                        <p>Address</p>
                        <p>Phone Number</p>
                        <p>Email</p>
                </div>
        </footer>
  )
}
