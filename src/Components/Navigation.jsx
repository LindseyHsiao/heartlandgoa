import logo from '../assets/heartlandLogo.jpg'


export default function Navigation() {
    return (
        <nav className='nav' id='hero'>
            <div className='navigation' >
                <img src={logo} alt='heartland logo' className='nav-logo' />
                <div className='nav-options'>
                    <h3>Yoga Teacher Training</h3>
                    <h3>Retreats</h3>
                    <h3>About</h3>
                    <h3>Contact Us</h3>
                    <h3>Blog</h3>
                </div>
            </div>
            <div className='nav-text'>
                <h1>Yoga Teacher Training <br/> & YACEP Courses</h1>
                <button className='nav-button'>Enroll Now</button>
            </div>
        </nav>
    )
}
