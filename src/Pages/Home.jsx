// import logo from '../assets/heartlandLogo.jpg'
import rys200 from '../assets/rys200.png'
import rys300 from '../assets/rys300.png'
import YACEP from '../assets/YACEP.png'
import mountainYogi from '../assets/mountainYogi.jpg'
import founder from '../assets/founder-img.jpeg'
import teachGoa from '../assets/teachGoa.jpg'
import classPicGoa from '../assets/classPicGoa.jpg'
import goaBeach from '../assets/goaBeach.jpg'
import YoutubeEmbed from '../Components/YoutubeImbed'

export default function Home() {
    return (
        <section >
            <div className='home'>
                <h1>Experience Heartland Yoga</h1>
                {/* <div className='home-dots'>howdo i make this shorter</div> */}
                <div><img src={founder} alt="" className='home-intro-pic' /></div>
                <p>Heartland Yoga is a laboratory for teaching and practicing yoga. We have one overall aim; to inspire and motivate all sorts of people from all over the world to find balance, serenity, and joy in their life practicing yoga in its most holistic and profound manifestation. <p />
                    <p>We offer personalized retreat programs and certified Yoga Teacher Training programs in a clear, inclusive and accessible way right from introductory courses to specialized additional instructional classes-approved by the USA Yoga Alliances. This we do in our wonderful, residential retreat-centre Goa, India. </p>
                    <p>Our  intention is clear: We want to emerge as one of the most reputable and comprehensive Yoga Teacher Training Institutes in India. We incorporate expertise and a contemplative approach to traditional yoga. We practice discipline and we teach discipline. But always – always – with the most gentle and reverent approach to every individual student. Anyone from any age group, any gender, any physical and mental state and with any life history can join us. </p>
                    <p>“Saying you are not flexible and fit enough for yoga, is like saying you are too dirty to take a bath.&quot; - Devesh Bhargav, founder of Heartland Yoga.</p> </p>
            </div>
            <div className='yoga-alliance'>
                <img src={rys200} alt="" />
                <img src={rys300} alt="" />
                <img src={YACEP} alt="" />
            </div>
            <div className='home-discover'>
                <h2>Discover <br /> our<br /> Location</h2>
                <div className='discover-pics'>
                    <img src={goaBeach} alt="" />
                    <img src={mountainYogi} alt="" />
                    <div className='discover-two-pics'><img src={mountainYogi} alt="" /></div>
                </div>
            </div>
            <div className='mission'>
                <div className='mission-details'>
                    <h2>our <br />mission</h2>
                    <p>Ensure an inclusive and nourishing environment to provide the yoga community with quality training, workshops, and classes that support the exploration and expansion of the mind, body, and soul. We aim to engage the yoga community in holistic wellness and collective wellbeing.</p>
                </div>
                <img src={teachGoa} alt="" className='home-mission-pic' />
            </div>
            <div className='mission'>
                <img src={classPicGoa} alt="" className='home-mission-pic' />

                <div className='vision-details'>
                    <h2>our <br />vision</h2>
                    <p>We strive to provide accessible and proficient yogic training. We aspire to empower the yoga community to explore themself and aid in self-transformation by inspiring a healthier lifestyle.</p>
                </div>
            </div>
            <div className='mission purpose'>
                <div className='mission-details'>
                    <h2>our <br />purpose</h2>
                    <p>Our objective is to teach and promote various traditional Yoga techniques and practices. We aim to enable the community to be self-disciplined and controlled, leading to immense awareness and a higher level of consciousness. We are set out to support the yoga community in their paths of wellness and liberation.</p>
                </div>
                <div className='vision-details'>
                    <h2>our <br />values</h2>
                    <ul>
                        <li>Accessibility and inclusivity</li>
                        <li>Peace and empathetic acceptance</li>
                        <li>Discipline</li>
                        <li>Authenticity</li>
                        <li>Compassion and gratitude</li>
                        <li>Optimism</li>
                        <li>Safety and service-orientation</li>
                    </ul>
                </div>
            </div>

            <div className='questions'>
                <div>
                    <h3>Need more information<br />about our courses? </h3>
                    <h3>Have questions about what<br />course is best for you?</h3>
                </div>
                <div className='questions-buttons'>
                    <button> connect with us</button>
                    <button> upcoming courses</button>
                </div>
            </div>

            <div className='testimonials'>
                <h2>Testimonials</h2>
                <div className='testimonial-videos'>
                    <div className='test-vid'><YoutubeEmbed embedId="FY95KUCGsGw" /></div>
                    <div className='test-vid'><YoutubeEmbed embedId="a03HqpxZxtg" /></div>
                    <div className='test-vid'><YoutubeEmbed embedId="ZXhEBccEOKY" /></div>
                   
                </div>
            </div>
        </section>
    )
}
