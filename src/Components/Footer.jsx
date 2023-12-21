import logo from '../assets/heartlandLogo.jpg'

export default function Footer() {
  return (
    <footer className='footer'>
    
      <div>
        <p>Teacher Training</p>
        <p>Retreats</p>
      </div>
      <img src={logo} alt="" />
      <div>
        <p>About</p>
        <p>Contact</p>
      </div>

      </footer>
  )
}
