import { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [viewedQuestions, setViewedQuestions] = useState(new Set());

    const faqs = [
        {
            category: "Registration",
            question: "How many events can we participate ? ",
            answer: "You can participate in at most of two technical event and one non technical event"
        },
        {
            category: "Registration",
            question: "Last date for registration ? ",
            answer: "last date for registration is -----, however we encourage registering ASAP since few events may have limited seats and may get over."
        },
        {
            category: "Refreshment",
            question: "Food ? ",
            answer: "Food and refreshment will be provided."
        },
        {
            category: "Other",
            question: "Parking and transportation?",
            answer: "Separate parking facilities are available for two and four wheelers. Participants can park their vehicles at their own risk. Volunteers will guide you on the same."
        },
        {
            category: "Rules",
            question: "Registration and Certificates",
            answer: "Certificates will be provided."
        },
        {
            category: "Outfit",
            question: "Dress code and college ID",
            answer: "Please wear formal attire and bring your college ID for verification."
        },
        
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