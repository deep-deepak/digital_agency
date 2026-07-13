import { Container, Row, Col } from 'react-bootstrap';

const ACCENT = '#FF4B2B';

const AboutSection = () => {
    const strengths = [
        {
            id: 1,
            title: 'MODERN EQUIPMENT',
            image: 'https://loremflickr.com/500/500/gymequipment,weights',
        },
        {
            id: 2,
            title: 'CERTIFIED TRAINERS',
            image: 'https://loremflickr.com/500/500/personaltrainer,coach',
        },
        {
            id: 3,
            title: 'PROVEN RESULTS',
            image: 'https://loremflickr.com/500/500/fitness,transformation',
        },
        {
            id: 4,
            title: 'SUPPORTIVE COMMUNITY',
            image: 'https://loremflickr.com/500/500/groupworkout,gym',
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
                            TURNING EFFORT INTO REAL RESULTS
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
                        ApexFit Gym is a full-service fitness center built for people who are serious about progress. We combine strength training, conditioning, and nutrition guidance into one connected program that delivers real, lasting change &mdash; not just a workout for the day.
                    </p>
                    <p>
                        From first-time gym-goers to competitive athletes, our team plans, coaches, and tracks every step of your journey. We handle programming, form correction, and progress tracking, so you always know exactly what to do and why.
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
                                    background: 'linear-gradient(to bottom, rgba(13,13,13,0.2), rgba(13,13,13,0.8))',
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
