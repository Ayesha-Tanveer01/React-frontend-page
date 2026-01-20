import logoImg from '../assets/images/star.png';


function Navbar() {
  return (
    <nav className="navbar">
      
      
      <div className="logo-container">
        <img src={logoImg} alt="WizardZ logo" className="logo-img" />
        <span className="logo-text">WizardZ</span>
      </div>

      <ul className="nav-links">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <button className="nav-btn">Request a quote</button>
    </nav>
  )
}

export default Navbar
