import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ACCENT = '#6C5CE7';

const faqs = [
    {
        id: 1,
        question: 'What digital marketing services does Ascendly provide?',
        answer: 'Ascendly offers full-service digital marketing including SEO, paid media (Google, Meta, LinkedIn), social media marketing, content marketing, email & CRM marketing, and conversion-focused web design. We tailor a mix of these channels to each client’s goals and budget.',
    },
    {
        id: 2,
        question: 'What industries do you work with?',
        answer: 'We work with e-commerce brands, B2B SaaS companies, local service businesses, and retail brands. Our strategies are adapted to the buying journey and channels that matter most for each industry.',
    },
    {
        id: 3,
        question: 'How long does it take to see results?',
        answer: 'Paid media campaigns typically show measurable results within 2–4 weeks. SEO and organic content are longer-term investments, usually showing meaningful traffic and ranking improvements within 3–6 months.',
    },
    {
        id: 4,
        question: 'Do you offer a free consultation?',
        answer: 'Yes — we offer a free, no-obligation strategy call for all prospective clients. We’ll review your current marketing and outline where we see the biggest opportunities. Book a slot via our contact section below.',
    },
    {
        id: 5,
        question: 'How do you measure success and ROI?',
        answer: 'Every engagement starts with clear KPIs tied to your business goals — whether that’s leads, revenue, or cost per acquisition. You get a live dashboard plus a monthly report breaking down performance against those targets.',
    },
    {
        id: 6,
        question: 'Do you require long-term contracts?',
        answer: 'We recommend a minimum 3-month engagement so strategies have time to gain traction, but we do not lock clients into long-term contracts. You can scale up, scale down, or pause with 30 days’ notice.',
    },
    {
        id: 7,
        question: 'Will I have a dedicated point of contact?',
        answer: 'Yes. Every client is paired with a senior strategist who oversees your account and coordinates our specialists in SEO, paid media, content, and design on your behalf.',
    },
    {
        id: 8,
        question: 'Can you manage our advertising budget directly?',
        answer: 'Yes, we can manage ad accounts and budgets directly on your behalf across Google Ads, Meta Ads Manager, and LinkedIn Campaign Manager, with full transparency on spend and performance.',
    },
    {
        id: 9,
        question: 'Do you build websites and landing pages too?',
        answer: 'Yes. Our team designs and builds fast, conversion-focused websites and landing pages, ensuring the traffic we generate lands on a page built to convert.',
    },
    {
        id: 10,
        question: 'How do I get started with Ascendly?',
        answer: 'Getting started is simple — fill in the contact form below, call us, or email hello@ascendlydigital.com. We’ll schedule a free strategy call to understand your goals and propose a tailored plan.',
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
                                        ? '0 4px 20px rgba(108,92,231,0.15)'
                                        : '0 2px 8px rgba(0,0,0,0.06)',
                                    border: openId === faq.id ? '1px solid rgba(108,92,231,0.3)' : '1px solid #e9ecef',
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
                                        color: openId === faq.id ? ACCENT : '#14132B',
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
                                        background: openId === faq.id ? ACCENT : '#14132B',
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
                            onMouseEnter={e => e.currentTarget.style.background = '#14132B'}
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
