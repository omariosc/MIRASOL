import { Link } from 'react-router-dom'
import { img } from '../utils'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__col">
            <h3>Location</h3>
            <p><strong>Strasbourg Convention Center, France</strong></p>
            <p style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
              Room details to be confirmed
            </p>
          </div>
          <div className="footer__col">
            <h3>Quick Links</h3>
            <ul className="footer__links">
              <li><Link to="/call-for-papers">Call for Papers</Link></li>
              <li><Link to="/how-to-submit">How to Submit</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/keynote-speakers">Keynote Speakers</Link></li>
              <li><Link to="/organising-committee">Organising Committee</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3>Contact Us</h3>
            <p>If you have any questions, please contact</p>
            <p><a href="mailto:info.camera.mri@gmail.com">info.camera.mri@gmail.com</a></p>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">&copy; 2026 MIRASOL Workshop. All rights reserved.</span>
          <div className="footer__bottom-logos">
            <a href="https://www.cameramriafrica.org/" target="_blank" rel="noopener noreferrer"><img src={img('logo-camera.webp')} alt="CAMERA" loading="lazy" /></a>
            <a href="https://miccai.org/" target="_blank" rel="noopener noreferrer"><img src={img('logo-miccai.webp')} alt="MICCAI" loading="lazy" /></a>
            <a href="https://rise-miccai.org/" target="_blank" rel="noopener noreferrer"><img src={img('sponsor-1.webp')} alt="RISE MICCAI" className="footer__logo-rise" loading="lazy" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
