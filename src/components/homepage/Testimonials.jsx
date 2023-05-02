import React from 'react'
import '../../styles/testimonials.css'
import tt1 from '../../assets/tt1.jpg'
import tt2 from '../../assets/tt2.jpg'
import tt3 from '../../assets/tt3.jpg'
import tt4 from '../../assets/tt4.jpg'

export default function Testimonials() {
  return (
        <section id='testimonials'>
          <h4>Testimonials</h4>
          <div id='tts'>
            <div>
              <div>
                <p className='rating'>*****</p>
                <img src={tt1} alt="Testimonial 1" />
                <p>Great service!</p>
              </div>
              <p className='name'>Annie</p>
            </div>

            <div>
              <div>
                <p className='rating'>*****</p>
                <img src={tt2} alt="Testimonial 2" />
                <p>It was amazing!</p>
              </div>
              <p className='name'>Bayo</p>
            </div>

            <div>
              <div>
                <p className='rating'>*****</p>
                <img src={tt3} alt="Testimonial 3" />
                <p>Very nice service.</p>
              </div>
              <p className='name'>Ray</p>
            </div>

            <div>
              <div>
                <p className='rating'>*****</p>
                <img src={tt4} alt="Testimonial 4" />
                <p>Masha Allah</p>
              </div>
              <p className='name'>Imran</p>
            </div>
          </div>
        </section>
  )
}
