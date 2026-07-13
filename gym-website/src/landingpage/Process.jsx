import { Container, Row, Col } from 'react-bootstrap';

const ACCENT = '#FF4B2B';

const steps = [
    {
        number: '01',
        title: 'Free Trial & Assessment',
        description: 'Come in for a free session and fitness assessment so we understand your goals and starting point.',
    },
    {
        number: '02',
        title: 'Choose Your Plan',
        description: 'Pick a membership or coaching package that fits your schedule, budget, and training goals.',
    },
    {
        number: '03',
        title: 'Personalized Program',
        description: 'Your coach builds a training and nutrition plan tailored specifically to you, not a generic template.',
    },
    {
        number: '04',
        title: 'Train & Track Progress',
        description: 'Train with expert guidance while we track strength, body composition, and performance metrics.',
    },
    {
        number: '05',
        title: 'Achieve Your Goals',
        description: 'Regular check-ins and program adjustments keep you progressing toward lasting results.',
    },
];

const Process = () => {
    return (
        <section id="process" className="py-5" style={{ background: '#ffffff', padding: '90px 0' }}>
            <Container>
                <Row className="justify-content-center mb-5" data-aos="fade-up">
                    <Col lg={8} className="text-center">
                        <p className="text-uppercase fw-semibold mb-2" style={{ color: ACCENT, letterSpacing: '1.5px', fontSize: '14px' }}>
                            HOW MEMBERSHIP WORKS
                        </p>
                        <h2 className="product_heading">Your Path to Real Results</h2>
                        <div style={{ width: '50px', height: '3px', background: ACCENT, margin: '16px auto 0' }} />
                    </Col>
                </Row>

                <Row className="g-4">
                    {steps.map((step, index) => (
                        <Col key={step.number} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay={index * 60}>
                            <div
                                className="process-card h-100 p-4 position-relative"
                                style={{
                                    background: '#0D0D0D',
                                    borderRadius: '10px',
                                    color: '#fff',
                                    overflow: 'hidden',
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '10px',
                                        fontSize: '5rem',
                                        fontWeight: 800,
                                        color: 'rgba(255,255,255,0.06)',
                                        lineHeight: 1,
                                    }}
                                >
                                    {step.number}
                                </span>
                                <div
                                    className="mb-3"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: ACCENT,
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                    }}
                                >
                                    {step.number}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>
                                    {step.title}
                                </h3>
                                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 0, lineHeight: 1.7 }}>
                                    {step.description}
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Process;
