import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section" id="footer-contact">
      {/* Decorative top border line */}
      <div className="footer-top-line" aria-hidden="true"></div>

      <div className="footer-container">
        {/* Left Column - Logo and Organization */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <span className="logo-text">SPECTRA</span>
          </div>
          <img src='/logoMADC.png' loading='lazy' alt='MADC logo' width={70}/>
          <p className="footer-org-name">Kongu Engineering College</p>
        </div>

        {/* Middle Column - Contact */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">📞</span>
              <div className="contact-details">
                <p className="contact-name">MUKIL</p>
                <a href="tel:+919843856004" className="contact-link">
                  +91 9843856004
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">📞</span>
              <div className="contact-details">
                <p className="contact-name">MADHUVARSHINI</p>
                <a href="tel:+918012439337" className="contact-link">
                  +91 8012439337
                </a>
              </div>
            </div>

            <a 
              href="mailto:spectraarena@gmail.com" 
              className="contact-link contact-email"
            >
              <span className="contact-icon" aria-hidden="true">✉</span>{" "}
              madcoffical2022@gmail.com
            </a>
          </div>
        </div>

        {/* Middle-Right Column - Address */}
        <div className="footer-column">
          <h3 className="footer-heading">Address</h3>
          <address className="address-text">
            KONGU ENGINEERING COLLEGE, Perundurai Erode 638060 
          </address>
        </div>

        {/* Right Column - Social */}
        <div className="footer-column footer-social">
          <h3 className="footer-heading">SPECTRA'26</h3>
          <a
            href="https://www.instagram.com/madc_of_kec?igsh=MTZrYnN1MmllejJreQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-platform">Instagram</span>
            <span className="social-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Bottom Credits */}
      <div className="footer-bottom">
        <p className="footer-credits">
          Designed by{" "}
          <a className="credits-highlight" href='https://www.linkedin.com/in/santhosh-v-43a161227/' target="_blank" rel="noopener noreferrer">Santhosh Radhai</a>
        </p>
      </div>

      {/* Decorative corner accents */}
      <div className="footer-corner bottom-left" aria-hidden="true"></div>
      <div className="footer-corner bottom-right" aria-hidden="true"></div>
    </footer>
  );
}