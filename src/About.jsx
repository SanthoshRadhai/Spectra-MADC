import './About.css';

export default function About(){

    return (
        <section id="about" className="about-section">
                <div className="about-container">
                    <div className="about-visual">
                        <div className="about-image">
                            <img 
                                src="/About.jpeg" 
                                alt="SPECTRA Arena" 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='500' viewBox='0 0 600 500'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff3232;stop-opacity:0.1'/%3E%3Cstop offset='100%25' style='stop-color:%230066ff;stop-opacity:0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='500' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-family='Orbitron' font-size='24' fill='%23ff3232' text-anchor='middle'%3ESPECTRA ARENA%3C/text%3E%3C/svg%3E"
                                }}
                            />
                        </div>
                    </div>

                    <div className="about-content">
                        <div className="about-header">
                            <span className="about-accent">武</span>
                            <h2 className="about-title">ABOUT SPECTRA</h2>
                            <div className="about-underline"></div>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Years</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">1K+</div>
                                <div className="stat-label">Participants</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">10000+</div>
                                <div className="stat-label">Prize Money</div>
                            </div>
                        </div>

                        <div className="about-text">
                            <p>
                                <strong>SPECTRA</strong> is where skill meets spectacle. We're not just another event organizer—we're architects of adrenaline, curators of competition, and pioneers of precision entertainment.
                            </p>
                            <p>
                                Born from the neon-lit streets of cyberpunk dreams, we bridge the gap between traditional martial arts discipline and futuristic combat sports. Our arenas are digital colosseums where warriors test their limits against both man and machine.
                            </p>
                            <p>
                                Every event is crafted with surgical precision, blending ancient combat philosophy with cutting-edge technology. We believe in <strong>merit over popularity</strong>, <strong>precision over power</strong>, and <strong>legacy over legacy-building</strong>.
                            </p>
                        </div>

                        <button className="about-button">
                            Join The Movement
                        </button>
                    </div>
                </div>
            </section>
    )
}