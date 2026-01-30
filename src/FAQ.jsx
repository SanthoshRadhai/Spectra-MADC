import { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [viewedQuestions, setViewedQuestions] = useState(new Set());

    const faqs = [
        {
            category: "Registration",
            question: "What is the registration process?",
            answer: "Pay the ₹200 entry fee to receive your unique PARTICIPANT ID via email. Use this ID to register for individual events. Registration is verified manually by our team within 24-48 hours."
        },
        {
            category: "Registration",
            question: "Can I register as a team?",
            answer: "Yes, you can register as a team, but each team member must pay the individual ₹200 registration fee to receive their own PARTICIPANT ID."
        },
        {
            category: "Events",
            question: "How many events can I participate in?",
            answer: "Once you pay the entry fee, you can participate in ANY and ALL events. There's no limit - your ₹200 unlocks access to the entire SPECTRA arena."
        },
        {
            category: "Events",
            question: "What types of events are available?",
            answer: "SPECTRA features a variety of combat sports and martial arts competitions, including traditional disciplines and modern combat formats. Specific event details and schedules will be sent to your registered email."
        },
        {
            category: "Venue",
            question: "Where is SPECTRA held?",
            answer: "Venue details and complete location coordinates will be provided in your confirmation email after registration verification."
        },
        {
            category: "Rules",
            question: "What are the age requirements?",
            answer: "Participants must be 16 years or older. Participants under 18 require parental consent forms, which will be provided during registration."
        },
        {
            category: "Prize",
            question: "What is the total prize pool?",
            answer: "SPECTRA offers over ₹10,000+ in total prize money distributed across all events, with additional awards for exceptional performances."
        },
        {
            category: "Logistics",
            question: "Are food and refreshments provided?",
            answer: "Yes! Refreshments and lunch are included in your ₹200 entry fee. All participants will receive meals and hydration throughout the event day."
        },
        {
            category: "Support",
            question: "What if I don't receive my PARTICIPANT ID?",
            answer: "Check your spam/junk folder first. If you still haven't received it within 48 hours of payment, contact our support team immediately with your payment proof."
        },
        {
            category: "Rules",
            question: "What should I bring on event day?",
            answer: "Bring your PARTICIPANT ID (digital or printed), valid photo ID, comfortable athletic wear, and any personal equipment specific to your chosen events. Detailed requirements will be in your confirmation email."
        }
    ];

    const handleToggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
            setViewedQuestions(prev => new Set([...prev, index]));
        }
    };

    const answeredCount = viewedQuestions.size;
    const totalCount = faqs.length;

    return (
        <section className="faq-section">
            {/* Background effects */}
            <div className="faq-grid-overlay"></div>
            
            <div className="faq-container">
                {/* Header */}
                <div className="faq-header">
                    <div className="faq-accent">FAQ</div>
                    <h2 className="faq-title">KNOWLEDGE BASE</h2>
                    <div className="faq-underline"></div>
                    <p className="faq-subtitle">
                        Intel Archives • Combat Protocols • Mission Briefing
                    </p>
                    
                    {/* Progress tracker */}
                    <div className="faq-progress">
                        <div className="progress-bar">
                            <div 
                                className="progress-fill" 
                                style={{ width: `${(answeredCount / totalCount) * 100}%` }}
                            ></div>
                        </div>
                        <div className="progress-text">
                            <span className="progress-count">{answeredCount}</span>
                            <span className="progress-separator">/</span>
                            <span className="progress-total">{totalCount}</span>
                            <span className="progress-label">QUERIES ACCESSED</span>
                        </div>
                    </div>
                </div>

                {/* Timeline FAQ */}
                <div className="faq-timeline">
                    {/* Vertical line */}
                    <div className="timeline-line"></div>

                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className={`timeline-item ${activeIndex === index ? 'active' : ''} ${viewedQuestions.has(index) ? 'viewed' : ''}`}
                        >
                            {/* Timeline node */}
                            <div className="timeline-node" onClick={() => handleToggle(index)}>
                                <div className="node-outer">
                                    <div className="node-inner">
                                        <span className="node-number">{String(index + 1).padStart(2, '0')}</span>
                                    </div>
                                </div>
                                
                                {/* Pulse effect when active */}
                                {activeIndex === index && (
                                    <>
                                        <div className="pulse-ring pulse-1"></div>
                                        <div className="pulse-ring pulse-2"></div>
                                        <div className="pulse-ring pulse-3"></div>
                                    </>
                                )}
                            </div>

                            {/* Content card */}
                            <div className="timeline-content">
                                <div 
                                    className="question-card"
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className="question-header">
                                        <span className="question-category">{faq.category}</span>
                                        <div className={`question-icon ${activeIndex === index ? 'rotate' : ''}`}>
                                            {activeIndex === index ? '−' : '+'}
                                        </div>
                                    </div>
                                    <h3 className="question-text">{faq.question}</h3>
                                </div>

                                {/* Answer panel */}
                                <div className={`answer-panel ${activeIndex === index ? 'expanded' : ''}`}>
                                    <div className="answer-content">
                                        <div className="answer-border"></div>
                                        <p className="answer-text">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <div className="faq-footer">
                    <p>Still have questions? Contact our support team</p>
                </div>
            </div>
        </section>
    );
}