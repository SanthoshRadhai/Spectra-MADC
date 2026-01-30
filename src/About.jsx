import { useEffect, useRef, useState } from 'react';
import './About.css';

export default function About(){
    const [yearsCount, setYearsCount] = useState(0);
    const [participantsCount, setParticipantsCount] = useState(0);
    const [prizeCount, setPrizeCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        
                        // Animate Years (0 to 5)
                        let currentYears = 0;
                        const yearsInterval = setInterval(() => {
                            currentYears += 1;
                            setYearsCount(currentYears);
                            if (currentYears >= 5) clearInterval(yearsInterval);
                        }, 200);

                        // Animate Participants (0 to 1000)
                        let currentParticipants = 0;
                        const participantsInterval = setInterval(() => {
                            currentParticipants += 50;
                            setParticipantsCount(currentParticipants);
                            if (currentParticipants >= 1000) {
                                setParticipantsCount(1000);
                                clearInterval(participantsInterval);
                            }
                        }, 30);

                        // Animate Prize (0 to 10000)
                        let currentPrize = 0;
                        const prizeInterval = setInterval(() => {
                            currentPrize += 500;
                            setPrizeCount(currentPrize);
                            if (currentPrize >= 10000) {
                                setPrizeCount(10000);
                                clearInterval(prizeInterval);
                            }
                        }, 30);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

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

                        <div className="about-stats" ref={statsRef}>
                            <div className="stat-item">
                                <div className="stat-number">{yearsCount}+</div>
                                <div className="stat-label">Years</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">{participantsCount >= 1000 ? '1K' : participantsCount}+</div>
                                <div className="stat-label">Participants</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">{prizeCount}+</div>
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