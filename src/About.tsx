import './App.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function About () {
    return (
        <div className='AboutContainer'>
        <div className='AboutContent'>
          <h2>Welcome to TimWholesalers</h2>
          <p>
            TimWholesalers is a wholesale company located in the heart of Timau CBD. We specialize in providing a wide range of high-quality household goods and foodstuffs at competitive prices for retailers.
          </p>
          <p>
            At TimWholesalers, we believe in delivering exceptional value to our customers through top-notch products and outstanding service. Our mission is to empower retailers by offering them convenient access to premium goods that meet their customers' needs.
          </p>
        </div>
        <div className='ContactInfo'>
          <h1>Contact Us</h1>
          <p>
            <FaPhone /> Call us today at: <br />
            <span className='ContactDetail'>+254 xxxxxxxx</span>
          </p>
          <p>
            <FaEnvelope /> Email: <br />
            <span className='ContactDetail'>TimWholesalers@xxxxxxx.xxx</span>
          </p>
        </div>
      </div>
    );
  }
  
  export default About;