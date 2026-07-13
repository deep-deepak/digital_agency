import { Container, Row, Col } from 'react-bootstrap';
import {
    FaDumbbell,
    FaUsers,
    FaHeartbeat,
    FaAppleAlt,
    FaRunning,
    FaLaptop,
} from 'react-icons/fa';

const ACCENT = '#FF4B2B';

const programs = [
    {
        id: 1,
        icon: <FaDumbbell size={28} />,
        title: 'Personal Training',
        description: 'One-on-one coaching with a certified trainer, built around your goals, schedule, and current fitness level.',
    },
    {
        id: 2,
        icon: <FaUsers size={28} />,
        title: 'Group Fitness Classes',
        description: 'High-energy HIIT, strength, and circuit classes that keep you motivated and accountable with the community.',
    },
    {
        id: 3,
        icon: <FaHeartbeat size={28} />,
        title: 'Strength & Conditioning',
        description: 'Structured programming to build muscle, improve performance, and increase overall athletic capacity.',
    },
    {
        id: 4,
        icon: <FaRunning size={28} />,
        title: 'Yoga & Mobility',
        description: 'Recovery-focused sessions that improve flexibility, reduce injury risk, and support long-term training.',
    },
    {
        id: 5,
        icon: <FaAppleAlt size={28} />,
        title: 'Nutrition Coaching',
        description: 'Personalized meal and macro guidance that complements your training and accelerates results.',
    },
    {
        id: 6,
        icon: <FaLaptop size={28} />,
        title: 'Online Coaching',
        description: 'Remote programming, form checks, and check-ins for members who train outside the gym.',
    },
];

const ProgramsSection = () => {
    return (
        <section id="programs" style={{ background: '#f8f9fa', padding: '90px 0' }}>
            <Container>
                <Row className="justify-content-center mb-5" data-aos="fade-up">
                    <Col lg={8} className="text-center">
                        <p className="text-uppercase fw-semibold mb-2" style={{ color: ACCENT, letterSpacing: '1.5px', fontSize: '14px' }}>
                            WHAT WE OFFER
                        </p>
                        <h2 className="product_heading">Programs Built to Get You Results</h2>
                        <div style={{ width: '50px', height: '3px', background: ACCENT, margin: '16px auto 0' }} />
                    </Col>
                </Row>

                <Row className="g-4">
                    {programs.map((program, index) => (
                        <Col key={program.id} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay={index * 50}>
                            <div
                                className="program-card h-100 p-4"
                                style={{
                                    background: '#fff',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                    border: '1px solid #eee',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,75,43,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                                }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center mb-4"
                                    style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '10px',
                                        background: 'rgba(255,75,43,0.1)',
                                        color: ACCENT,
                                    }}
                                >
                                    {program.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#0D0D0D' }}>
                                    {program.title}
                                </h3>
                                <p style={{ color: '#555', marginBottom: 0, lineHeight: 1.7 }}>
                                    {program.description}
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ProgramsSection;
