import Img from '../assets/images/img-upper-left-card.jpeg';
import Imgx from '../assets/images/img-bottom-left-card.jpeg';
import Imgy from '../assets/images/img-upper-right-card.jpeg';
import Imgz from '../assets/images/img-bottom-right-card.jpeg';

function ServiceCard() {
  return (
    <div className="card-container">

        <div className="left-card">

          <div className="upper-left-card">
            <div className="internal-left">
                <span className="green-span">Search Engine Optimization</span>
                <span className="learn-span">Learn More</span>
            </div>
            <div className="internal-right">
                <img src={Img} alt="WizardZ logo" className="img-upper-left-card" />
            </div>
          </div>
          

          <div className="lower-left-card">
            <div className="internal-left">
                <span className="White-span">Social Media Marketing</span>
                <span className="white-learn-span">Learn More</span>
            </div>
            <div className="internal-right">
                <img src={Imgx} alt="WizardZ logo" className="img-bottom-left-card" />
            </div>
          </div>

        </div>
        


        <div className="right-card">

          <div className="upper-right-card">
            <div className="internal-left">
                <span className="White-span">Pay Per Click</span>
                <span className="white-learn-span">Learn More</span>
            </div>
            <div className="internal-right">
                <img src={Imgy} alt="WizardZ logo" className="img-upper-right-card" />
            </div>
          </div>


          <div className="lower-right-card">
            <div className="internal-left">
                <span className="green-span">E-mail Marketing</span>
                <span className="learn-span">Learn More</span>
            </div>
            <div className="internal-right">
                <img src={Imgz} alt="WizardZ logo" className="img-bottom-right-card" />
            </div>
          </div>

        </div>

    </div>
  )
}
export default ServiceCard