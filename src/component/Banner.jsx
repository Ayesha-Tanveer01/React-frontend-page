import Img from '../assets/images/Grey-banner-img.jpeg';

function Banner() {
  return (
    <div className="Grey-container">
      <div className="Grey-text">
        <span className="heading">Let's make things happen</span>
        <span className="normal-text">
        <p>Contact us today to learn more about how our digital</p>
        <p>marketing services can help your business grow and </p>
        <p>succeed online</p>
        </span>
        <button className="proposal-btn">Get your free proposal</button>
      </div>
      <div className="Grey-img">
        <img src={Img} alt="WizardZ logo" className="Grey-banner-img" />
      </div>
    </div>
  )
}

export default Banner