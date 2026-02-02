import { useState } from "react";
import "./HomePage.css";
import EventCard from "./EventCard";
import { events } from './Data/eventsData.js';
import About from "./About.jsx";
import Countdown from "./Countdown.jsx";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleRegister = (eventTitle) => {
        alert(`Registering for: ${eventTitle}`);
        // Add your registration logic here
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <main>
            <nav className="navbar">
                <div className="navbar-content">
                    <div className="navbar-logo">SPECTRA</div>

                    {/* Hamburger Menu Icon */}
                    <div
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Navigation Links */}
                    <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#event-section" onClick={closeMenu}>Events</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#footer-contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            <div className="video-container">
                <video
                    className="background-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/Top_Bg.png"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                    style={{ pointerEvents: 'none' }}
                >
                    <source src="/Night.mp4" type="video/mp4" />
                </video>

                <nav className="top-nav">
                    <div className="logo">Midnight City</div>
                    <ul className="nav-links">
                        <li><a href="#event-section">Events</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#footer-contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="overlay">
                    <h1>SPECTRA</h1>
                    <p>Enter with Skill. Leave with Legacy.</p>
                    <p>March 6th, 2026</p>
                    <button onClick={() => window.open('https://forms.gle/sXSnBG9SkJk1sUBAA', '_blank')}>
                        Enter
                    </button>




                </div>


            </div>
            {/* Countdown Timer */}
            <section style={{
                background: 'linear-gradient(180deg, #0a0e10 0%, #0d1418 100%)',
                padding: '2rem 1rem'
            }}>
                <Countdown targetDate="2026-03-06T00:00:00" />
            </section>

            <section className="events-section" id="event-section">
                <div className="section-header">
                    <span className="japanese-accent">武</span>
                    <h2 className="section-title">UPCOMING EVENTS</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="events-container">
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            frontImage={event.frontImage}
                            backImage={event.backImage}
                            kanji={event.kanji}
                            title={event.title}
                            subtitle={event.subtitle}
                            date={event.date}
                            location={event.location}
                            price={event.price}
                            description={event.description}
                            onRegister={() => handleRegister(event.title)}
                        />
                    ))}
                </div>

                {/* <About/> */}
            </section>

            {/* Overlay to close menu when clicking outside */}
            {isMenuOpen && (
                <div
                    className="menu-overlay"
                    onClick={closeMenu}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999,
                        display: isMenuOpen ? 'block' : 'none'
                    }}
                />
            )}
        </main>
    );
}