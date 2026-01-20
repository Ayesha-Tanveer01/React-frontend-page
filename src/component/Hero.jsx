import logoImg from '../assets/images/hero-img.png';

function Hero() {
  return (
    <div className="hero-container">

        <div className="left-text">

            <div className="heading">
                <p className="heading-2">
                Navigating the digital landscape for success
                </p>
            </div>

            <div className="content">
                <p>
                Our digital marketing agency helps businesses grow and success online through a range of services including SEO, PPC, social media marketing, and content creation 
                </p>
                <button className="hero-btn">Book a Consultation</button>
            </div>

        </div>

        <div className="right-img">
            <img src={logoImg} alt="WizardZ logo" className="hero-img" />
        </div>

    </div>
  )
}

export default Hero