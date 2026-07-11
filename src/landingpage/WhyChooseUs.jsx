import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ACCENT = '#6C5CE7';

const slides = [
    {
        title: 'WHY CHOOSE US',
        subtitle: 'Certified Platform Partners',
        content: 'Our team holds certifications across Google Ads, Google Analytics, Meta Blueprint, and HubSpot &mdash; so your campaigns are built on best practice from day one.',
    },
    {
        title: 'WHY CHOOSE US',
        subtitle: 'Radical Transparency',
        content: 'No black boxes. You get real-time dashboards, monthly strategy calls, and full visibility into spend, performance, and what we’re doing next.',
    },
    {
        title: 'WHY CHOOSE US',
        subtitle: 'Dedicated Strategists',
        content: 'Every account is paired with a senior strategist who knows your business, not a rotating cast of junior account managers.',
    },
    {
        title: 'WHY CHOOSE US',
        subtitle: 'Proven ROI Track Record',
        content: 'We have helped brands across e-commerce, SaaS, and local services grow revenue by 2&ndash;5x through focused, data-backed marketing.',
    },
];

const WhyChooseUs = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveSlide((prev) => (prev + 1) % slides.length);
                setIsTransitioning(false);
            }, 500);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const handleSlideChange = (index) => {
        if (index !== activeSlide && !isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveSlide(index);
                setIsTransitioning(false);
            }, 500);
        }
    };

    return (
        <Container fluid className="p-0">
            <Row className="g-0">
                {/* Left Section */}
                <Col md={6} className="text-white p-4 p-md-5" style={{ minHeight: '100vh', backgroundColor: '#14132B' }}>
                    <div className="d-flex flex-column justify-content-center h-100">
                        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <p className="small mb-3" style={{ color: ACCENT }} data-aos="slide-up">EXPERTISE</p>
                            <h2 className="display-4 fw-bold mb-4">WHY PARTNER WITH ASCENDLY?</h2>
                            <div
                                className="accent-line mt-3"
                                data-aos="fade-in"
                                style={{ width: '50px', height: '3px', backgroundColor: ACCENT }}
                            ></div>
                            <p className="mb-5 text-light" style={{ marginTop: '20px' }} data-aos="slide-up">
                                Our team is dedicated to building marketing programs that compound in value over time. With deep expertise across SEO, paid media, and content, we design strategy around your specific growth goals &mdash; not a one-size-fits-all playbook.
                            </p>
                            <Button
                                variant="outline-light"
                                size="lg"
                                className="rounded-0 px-4 whyus_btn"
                                aria-label="Get in touch with Ascendly"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                GET IN TOUCH
                            </Button>
                        </div>
                    </div>
                </Col>

                {/* Right Section */}
                <Col md={6} className="p-0">
                    <div
                        className="position-relative h-100 d-flex align-items-center"
                        style={{ minHeight: '100vh', backgroundColor: ACCENT }}
                    >
                        <div className="position-absolute w-100 h-100" style={{ opacity: 0.1 }}>
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="position-absolute w-100"
                                    style={{
                                        height: '1px',
                                        backgroundColor: 'black',
                                        top: `${i * 5}%`,
                                        transform: 'rotate(-45deg)',
                                        transformOrigin: 'center',
                                    }}
                                />
                            ))}
                        </div>

                        <div className="position-relative p-4 p-md-5 text-white w-100">
                            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                                <div
                                    className="slide-content"
                                    style={{
                                        minHeight: '260px',
                                        opacity: isTransitioning ? 0 : 1,
                                        transition: 'opacity 0.5s ease',
                                    }}
                                >
                                    <h2 className="display-5 fw-bold mb-4">{slides[activeSlide].title}</h2>
                                    <h3 className="h2 mb-3">{slides[activeSlide].subtitle}</h3>
                                    <p
                                        className="mb-5"
                                        style={{ fontSize: '1.1rem' }}
                                        dangerouslySetInnerHTML={{ __html: slides[activeSlide].content }}
                                    />
                                </div>

                                <div className="d-flex gap-3 mt-5">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSlideChange(index)}
                                            className="btn p-0 border-0"
                                            style={{
                                                width: '12px',
                                                height: '12px',
                                                borderRadius: '50%',
                                                backgroundColor: activeSlide === index ? '#fff' : 'rgba(255,255,255,0.5)',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer',
                                            }}
                                            aria-label={`Slide ${index + 1}`}
                                            disabled={isTransitioning}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <style jsx>{`
                .btn:focus {
                    box-shadow: none;
                }
                .whyus_btn {
                    font-weight: 500;
                    letter-spacing: 1px;
                }
                .whyus_btn:hover {
                    background-color: ${ACCENT};
                    border-color: ${ACCENT};
                }
            `}</style>
        </Container>
    );
};

export default WhyChooseUs;
