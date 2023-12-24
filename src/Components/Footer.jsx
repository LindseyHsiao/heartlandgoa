import logo from '../assets/heartlandLogo.jpg'

export default function Footer() {
  return (
    <footer className='footer'>
    
      <div>
        <p>Teacher Training</p>
        <p>Yoga Retreats</p>
      </div>
      <img src={logo} alt="" />
      <div className='footer-div-right'>
        <p>About Heartland</p>
        <p>Contact Us</p>
      </div>

      </footer>
  )
}
