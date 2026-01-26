import "./HomePage.css";
import EventCard from "./EventCard";
import { events } from './Data/eventsData.js';
import About from "./About.jsx";

export default function Home() {
    const handleRegister = (eventTitle) => {
        alert(`Registering for: ${eventTitle}`);
        // Add your registration logic here
    };

    return (

        <main>

            <nav className="navbar">
                <div className="navbar-content">
                    <div className="navbar-logo">SPECTRA</div>
                    <ul className="navbar-links">
                        <li><a href="#events">Events</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <div className="video-container">

                <img src="/Top_Bg.png" alt="Background" className="background-image" style={{ zIndex: 0 }} />

                <nav className="top-nav">
                    <div className="logo">Midnight City</div>
                    <ul className="nav-links">
                        <li><a href="#events">Events</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="overlay">
                    <h1>SPECTRA</h1>
                    <p>Enter with Skill. Leave with Legacy.</p>
                    <p>Precision over noise. Purpose over hype.</p>
                    <button>Enter</button>
                </div>


            </div>

            <section className="events-section">
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

                <About/>

            </section>

            


        </main>




    );
}

