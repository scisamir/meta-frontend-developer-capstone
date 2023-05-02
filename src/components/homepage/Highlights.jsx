import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/highlights.css'
import wsp1 from '../../assets/wsp1.png'
import wsp2 from '../../assets/wsp2.png'
import wsp3 from '../../assets/wsp3.png'

export default function Highlights() {
  return (
        <section id='highlights'>
          <div id='hintro'>
            <h3>This weeks specials!</h3>
            <button><Link to="/bookings">Online Menu</Link></button>
          </div>

          <div id="wsp_dishes">
            <div className='dishes'>
              <img src={wsp1} alt="Week's special Image 1" />
              <div className='dish-names'>
                <p>Greek salad</p>
                <span>$ 10.99</span>
              </div>
              <p>Lorem ipsum dolor sit amet, illum vituperata id mea, eius phaedrum eu duo. Te maiorum gloriatur sea.</p>
              <div className='order'>
                <p>Order a delivery</p>
                <span>&</span>
              </div>
            </div>

            <div className='dishes'>
              <img src={wsp2} alt="Week's special Image 2" />
              <div className='dish-names'>
                <p>Bruchetta</p>
                <span>$ 5.99</span>
              </div>
              <p>Lorem ipsum dolor sit amet, illum vituperata id mea, eius phaedrum eu duo. Te maiorum gloriatur sea.</p>
              <div className='order'>
                <p>Order a delivery</p>
                <span>&</span>
              </div>
            </div>

            <div className='dishes'>
              <img src={wsp3} alt="Week's special Image 3" />
              <div className='dish-names'>
                <p>Lemon Dessert</p>
                <span>$ 5.00</span>
              </div>
              <p>Lorem ipsum dolor sit amet, illum vituperata id mea, eius phaedrum eu duo. Te maiorum gloriatur sea.</p>
              <div className='order'>
                <p>Order a delivery</p>
                <span>&</span>
              </div>
            </div>
          </div>
        </section>
  )
}
