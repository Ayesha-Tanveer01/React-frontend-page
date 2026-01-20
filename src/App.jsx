import './App.css'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Services from './component/Services';
import ServiceCard from './component/ServiceCard';
import Banner from './component/Banner';
import CaseStudies from './component/CaseStudies';
// import './Styles/global.css'
import './Styles/Navbar.css'
import './Styles/hero.css'
import './Styles/services.css'
import './Styles/serviceCard.css'
import './Styles/banner.css'
import './Styles/caseStudies.css'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ServiceCard />
      <Banner />
      <CaseStudies />
    </>
  )
}

export default App;
