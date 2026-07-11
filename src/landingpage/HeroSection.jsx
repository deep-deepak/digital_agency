import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
    const services = [
        "Search Engine Optimization",
        "Paid Social & PPC Advertising",
        "Content & Email Marketing",
        "Conversion-Focused Web Design",
        "Analytics & Growth Reporting",
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const typingSpeed = 80;
    const pauseDuration = 1800;

    useEffect(() => {
        if (charIndex < services[currentTextIndex].length) {
            const typingTimeout = setTimeout(() => {
                setDisplayText((prev) => prev + services[currentTextIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(typingTimeout);
        } else {
            const pauseTimeout = setTimeout(() => {
                setCharIndex(0);
                setDisplayText("");
                setCurrentTextIndex((prevIndex) =>
                    prevIndex === services.length - 1 ? 0 : prevIndex + 1
                );
            }, pauseDuration);

            return () => clearTimeout(pauseTimeout);
        }
    }, [charIndex, currentTextIndex, services]);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div
            id="home"
            data-aos="fade-in"
            style={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                backgroundImage: 'url("https://loremflickr.com/1600/900/digital-marketing,analytics")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                marginTop: '0',
                paddingTop: '76px',
            }}
        >
            {/* Dark overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(20,19,43,0.88), rgba(20,19,43,0.55))',
                }}
            />

            {/* Content */}
            <Container
                className="h-100 d-flex flex-column justify-content-center align-items-center text-white text-center position-relative"
            >
                <p
                    className="fw-semibold mb-3"
                    style={{
                        fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: '#6C5CE7',
                    }}
                    data-aos="fade-down"
                >
                    Digital Marketing Agency
                </p>
                <h1
                    className="display-1 fw-bold mb-3"
                    style={{
                        fontSize: 'clamp(2rem, 6vw, 4rem)',
                        letterSpacing: '1px',
                        lineHeight: 1.15,
                        maxWidth: '900px',
                    }}
                    data-aos="fade-up"
                >
                    We Turn Clicks Into Customers
                </h1>
                <p
                    className="mb-4 text-white"
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        maxWidth: '640px',
                        opacity: 0.9,
                    }}
                    data-aos="fade-up"
                >
                    Ascendly is a growth-driven digital marketing agency helping ambitious brands generate more traffic, leads, and revenue online.
                </p>
                <div
                    className="fs-4 position-relative mb-4"
                    style={{
                        letterSpacing: '1px',
                        height: '2em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#6C5CE7',
                        fontWeight: 600,
                        fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
                    }}
                >
                    {displayText}
                </div>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <Button
                        size="lg"
                        className="rounded-1 px-4 hero_cta_btn"
                        onClick={scrollToContact}
                    >
                        Get a Free Strategy Call
                    </Button>
                    <Button
                        size="lg"
                        variant="outline-light"
                        className="rounded-1 px-4"
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Services
                    </Button>
                </div>
            </Container>

            <style jsx>{`
                .hero_cta_btn {
                    background-color: #6C5CE7;
                    border: 1px solid #6C5CE7;
                    font-weight: 600;
                }
                .hero_cta_btn:hover {
                    background-color: #5647c9;
                    border: 1px solid #5647c9;
                }
            `}</style>
        </div>
    );
};

export default HeroSection;
