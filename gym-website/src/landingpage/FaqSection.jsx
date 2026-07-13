import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ACCENT = '#FF4B2B';

const faqs = [
    {
        id: 1,
        question: 'Do you offer a free trial?',
        answer: 'Yes — every prospective member gets a free trial session and fitness assessment. We’ll walk the floor with you, review your goals, and recommend the right program.',
    },
    {
        id: 2,
        question: 'What programs does ApexFit Gym offer?',
        answer: 'We offer personal training, group fitness classes, strength & conditioning, yoga & mobility, nutrition coaching, and online coaching for members who train remotely.',
    },
    {
        id: 3,
        question: 'What are your opening hours?',
        answer: 'We’re open Monday through Saturday from 5:00 AM to 10:00 PM, and Sunday from 7:00 AM to 6:00 PM.',
    },
    {
        id: 4,
        question: 'Do I need experience to join?',
        answer: 'Not at all. We work with complete beginners through competitive athletes. Every program is scaled to your current fitness level.',
    },
    {
        id: 5,
        question: 'How much does personal training cost?',
        answer: 'Pricing depends on session frequency and package length. During your free trial, your coach will recommend a plan and walk you through exact pricing.',
    },
    {
        id: 6,
        question: 'Can I cancel or pause my membership?',
        answer: 'Yes. Most memberships are month-to-month with no long-term lock-in, and you can pause for medical or travel reasons with advance notice.',
    },
    {
        id: 7,
        question: 'Do you provide nutrition guidance?',
        answer: 'Yes. Our nutrition coaching program pairs you with a coach who builds a personalized meal and macro plan around your training and lifestyle.',
    },
    {
        id: 8,
        question: 'Is there parking available on-site?',
        answer: 'Yes, we have free on-site parking for all members during gym hours.',
    },
    {
        id: 9,
        question: 'Do you offer online or remote coaching?',
        answer: 'Yes. Our online coaching program includes custom programming, video form checks, and weekly check-ins for members who can’t train in person.',
    },
    {
        id: 10,
        question: 'How do I get started at ApexFit Gym?',
        answer: 'Fill in the contact form below, call us, or email hello@apexfitgym.com. We’ll book your free trial session and get you started right away.',
    },
];

export default function FaqSection() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" style={{ background: '#f8f9fa', padding: '80px 0' }}>
            <Container>
                <Row className="justify-content-center mb-5" data-aos="fade-up">
                    <Col lg={8} className="text-center">
                        <p className="text-uppercase fw-semibold mb-2" style={{ color: ACCENT, letterSpacing: '1.5px', fontSize: '14px' }}>
                            NEED ANSWERS?
                        </p>
                        <h2 style={{
                            fontFamily: '"Oswald", sans-serif',
                            fontWeight: 700,
                            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: '#111',
                        }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ width: '50px', height: '3px', background: ACCENT, margin: '16px auto 0' }} />
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={9}>
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                                style={{
                                    marginBottom: '12px',
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    boxShadow: openId === faq.id
                                        ? '0 4px 20px rgba(255,75,43,0.15)'
                                        : '0 2px 8px rgba(0,0,0,0.06)',
                                    border: openId === faq.id ? '1px solid rgba(255,75,43,0.3)' : '1px solid #e9ecef',
                                    transition: 'all 0.3s ease',
                                    background: '#fff',
                                }}
                            >
                                <button
                                    onClick={() => toggle(faq.id)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '18px 24px',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        gap: '16px',
                                    }}
                                >
                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        color: openId === faq.id ? ACCENT : '#0D0D0D',
                                        transition: 'color 0.3s ease',
                                        lineHeight: 1.4,
                                    }}>
                                        {faq.question}
                                    </span>
                                    <span style={{
                                        flexShrink: 0,
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        background: openId === faq.id ? ACCENT : '#0D0D0D',
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '18px',
                                        fontWeight: 300,
                                        lineHeight: 1,
                                        transition: 'all 0.3s ease',
                                        transform: openId === faq.id ? 'rotate(45deg)' : 'rotate(0deg)',
                                    }}>
                                        +
                                    </span>
                                </button>

                                <div style={{
                                    maxHeight: openId === faq.id ? '300px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.4s ease',
                                }}>
                                    <p style={{
                                        padding: '0 24px 20px',
                                        margin: 0,
                                        color: '#555',
                                        lineHeight: 1.75,
                                        fontSize: '0.95rem',
                                        borderTop: '1px solid #f0f0f0',
                                        paddingTop: '16px',
                                    }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>

                <Row className="justify-content-center mt-5" data-aos="fade-up">
                    <Col className="text-center">
                        <p style={{ color: '#666', marginBottom: '16px' }}>
                            Still have questions? We&apos;re happy to help.
                        </p>
                        <a
                            href="#contact"
                            style={{
                                display: 'inline-block',
                                padding: '14px 36px',
                                background: ACCENT,
                                color: '#fff',
                                fontWeight: 600,
                                textDecoration: 'none',
                                borderRadius: '4px',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                fontSize: '14px',
                                transition: 'background 0.3s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = '#0D0D0D'}
                            onMouseLeave={e => e.currentTarget.style.background = ACCENT}
                        >
                            Contact Us
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
