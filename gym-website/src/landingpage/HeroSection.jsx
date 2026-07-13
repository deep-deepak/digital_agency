import { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
    const programs = [
        "Personal Training",
        "Strength & Conditioning",
        "Group Fitness Classes",
        "Nutrition Coaching",
        "Yoga & Mobility",
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const typingSpeed = 80;
    const pauseDuration = 1800;

    useEffect(() => {
        if (charIndex < programs[currentTextIndex].length) {
            const typingTimeout = setTimeout(() => {
                setDisplayText((prev) => prev + programs[currentTextIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(typingTimeout);
        } else {
            const pauseTimeout = setTimeout(() => {
                setCharIndex(0);
                setDisplayText("");
                setCurrentTextIndex((prevIndex) =>
                    prevIndex === programs.length - 1 ? 0 : prevIndex + 1
                );
            }, pauseDuration);

            return () => clearTimeout(pauseTimeout);
        }
    }, [charIndex, currentTextIndex, programs]);

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
                backgroundImage: 'url("https://loremflickr.com/1600/900/gym,weightlifting")',
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
                    background: 'linear-gradient(135deg, rgba(13,13,13,0.9), rgba(13,13,13,0.55))',
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
                        color: '#FF4B2B',
                    }}
                    data-aos="fade-down"
                >
                    Fitness & Strength Training Gym
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
                    Transform Your Body, Transform Your Life
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
                    ApexFit Gym is a full-service fitness center helping ambitious members build strength, endurance, and confidence with expert coaching and proven programs.
                </p>
                <div
                    className="fs-4 position-relative mb-4"
                    style={{
                        letterSpacing: '1px',
                        height: '2em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FF4B2B',
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
                        Get a Free Trial
                    </Button>
                    <Button
                        size="lg"
                        variant="outline-light"
                        className="rounded-1 px-4"
                        onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Programs
                    </Button>
                </div>
            </Container>

            <style>{`
                .hero_cta_btn {
                    background-color: #FF4B2B;
                    border: 1px solid #FF4B2B;
                    font-weight: 600;
                }
                .hero_cta_btn:hover {
                    background-color: #d93c1f;
                    border: 1px solid #d93c1f;
                }
            `}</style>
        </div>
    );
};

export default HeroSection;
