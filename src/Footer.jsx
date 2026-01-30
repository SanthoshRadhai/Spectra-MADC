import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-section">
            {/* Decorative top border line */}
            <div className="footer-top-line"></div>

            <div className="footer-container">
                {/* Left Column - Logo and Organization */}
                <div className="footer-column footer-brand">
                    <div className="footer-logo">
                        <span className="logo-text">SPECTRA</span>
                    </div>
                    <p className="footer-org-name">
                        Kongu Engineering<br />
                        College
                    </p>
                </div>

                {/* Middle Column - Contact */}
                <div className="footer-column footer-contact">
                    <h3 className="footer-heading">Contact</h3>
                    <div className="contact-list">
                        <div className="contact-item">
                            <span className="contact-icon">📞</span>
                            <div className="contact-details">
                                <p className="contact-name">MUKIL</p>
                                <a href="tel:+919843856004" className="contact-link">+91 9843856004</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📞</span>
                            <div className="contact-details">
                                <p className="contact-name">MADHUVARSHINI</p>
                                <a href="tel:+918012439337" className="contact-link">+91 8012439337</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">✉</span>
                            <a href="mailto:spectraarena@gmail.com" className="contact-link contact-email">
                                spectraarena@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Middle-Right Column - Address */}
                <div className="footer-column footer-address">
                    <h3 className="footer-heading">Address</h3>
                    <address className="address-text">
                        Kongu Engineering College,<br />
                        IT Park,<br />
                        Srinivasa Ramanujam<br />
                        Seminar Hall
                    </address>
                </div>

                {/* Right Column - Social */}
                <div className="footer-column footer-social">
                    <h3 className="footer-heading">SPECTRA'25</h3>
                    <a
                        href="https://instagram.com/spectra_arena"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <span className="social-platform">Instagram</span>
                        <span className="social-arrow">→</span>
                    </a>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="footer-bottom">
                <p className="footer-credits">
                    Designed by{" "}
                    <a
                        href="https://www.linkedin.com/in/santhosh-v-43a161227/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credits-highlight"
                    >
                        Santhosh Radhai
                    </a>
                </p>
            </div>


            {/* Decorative corner accents */}
            <div className="footer-corner bottom-left"></div>
            <div className="footer-corner bottom-right"></div>
        </footer>
    );
}