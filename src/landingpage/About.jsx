import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ACCENT = '#6C5CE7';

const AboutSection = () => {
    const strengths = [
        {
            id: 1,
            title: 'DATA-DRIVEN',
            image: 'https://loremflickr.com/500/500/analytics,dashboard',
        },
        {
            id: 2,
            title: 'CREATIVE STRATEGY',
            image: 'https://loremflickr.com/500/500/branding,design',
        },
        {
            id: 3,
            title: 'RESULTS FOCUSED',
            image: 'https://loremflickr.com/500/500/growth,startup',
        },
        {
            id: 4,
            title: 'FULLY TRANSPARENT',
            image: 'https://loremflickr.com/500/500/teamwork,office',
        },
    ];

    return (
        <Container className="py-5" id="about">
            {/* About Header */}
            <Row className="mb-5" data-aos="fade-right">
                <Col md={6}>
                    <div className="about-header">
                        <h6 className="text-uppercase mb-3" style={{ color: ACCENT }}>WHO WE ARE</h6>
                        <h2 className="about_heading" data-aos="fade-up">
                            TURNING MARKETING SPEND INTO MEASURABLE GROWTH
                        </h2>
                        <div
                            className="accent-line mt-3"
                            style={{
                                width: '50px',
                                height: '3px',
                                backgroundColor: ACCENT,
                            }}
                            data-aos="fade-right"
                        ></div>
                    </div>
                </Col>
                <Col md={6} data-aos="fade-left">
                    <p className="mb-4" style={{ fontWeight: 'bold' }}>
                        Ascendly Digital Marketing is a full-service growth agency built for ambitious brands. We combine SEO, paid media, content, and design into one connected strategy that drives real business outcomes &mdash; not just vanity metrics.
                    </p>
                    <p>
                        From startups to established enterprises, our team plans, builds, and optimizes every campaign around a single goal: sustainable, measurable growth. We handle everything from strategy and creative to execution and reporting, so you always know exactly what&apos;s working and why.
                    </p>
                </Col>
            </Row>

            {/* Strengths Grid */}
            <Row className="g-4" data-aos="fade-in">
                {strengths.map((item) => (
                    <Col key={item.id} xs={12} sm={6} lg={3} data-aos="zoom-in">
                        <div
                            className="strength-card position-relative"
                            style={{
                                height: '420px',
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: '0px 9px 13px 0px rgba(0, 0, 0, 0.09)',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            <div
                                className="position-absolute w-100 h-100"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(20,19,43,0.2), rgba(20,19,43,0.8))',
                                    top: 0,
                                    left: 0,
                                    zIndex: 1,
                                    transition: 'background 0.3s ease',
                                }}
                            />

                            <div
                                className="position-absolute bottom-0 start-0 w-100 p-3"
                                style={{ zIndex: 2, textAlign: 'center' }}
                            >
                                <h3
                                    className="text-white mb-0 about_heading3"
                                    style={{
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                    }}
                                    data-aos="slide-up"
                                >
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AboutSection;
