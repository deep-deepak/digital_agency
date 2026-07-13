import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const ACCENT = '#FF4B2B';

const testimonials = [
    {
        id: 1,
        name: 'Jason Reyes',
        role: 'Member since 2023',
        avatar: 'https://i.pravatar.cc/150?img=51',
        quote: 'I lost 22 pounds in four months with the personal training program. My coach adjusted my plan every single week based on real progress, not guesswork.',
    },
    {
        id: 2,
        name: 'Amara Bell',
        role: 'Group Fitness Member',
        avatar: 'https://i.pravatar.cc/150?img=44',
        quote: 'The group classes are intense but so much fun. I actually look forward to 6 AM workouts now, which I never thought I would say.',
    },
    {
        id: 3,
        name: 'Tom Bradshaw',
        role: 'Strength & Conditioning Client',
        avatar: 'https://i.pravatar.cc/150?img=33',
        quote: 'Hit a 405 lb deadlift PR eight months after joining. The programming here is genuinely built around progressive overload, not random workouts.',
    },
    {
        id: 4,
        name: 'Elena Cho',
        role: 'Nutrition Coaching Client',
        avatar: 'https://i.pravatar.cc/150?img=29',
        quote: 'The nutrition coaching completely changed how I eat around training. Simple, sustainable, and it actually worked.',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" style={{ background: '#0D0D0D', padding: '90px 0' }}>
            <Container>
                <Row className="justify-content-center mb-5" data-aos="fade-up">
                    <Col lg={8} className="text-center">
                        <p className="text-uppercase fw-semibold mb-2" style={{ color: ACCENT, letterSpacing: '1.5px', fontSize: '14px' }}>
                            MEMBER SUCCESS
                        </p>
                        <h2 className="text-white product_heading" style={{ color: '#fff' }}>What Our Members Say</h2>
                        <div style={{ width: '50px', height: '3px', background: ACCENT, margin: '16px auto 0' }} />
                    </Col>
                </Row>

                <Row className="g-4">
                    {testimonials.map((t, index) => (
                        <Col key={t.id} xs={12} md={6} data-aos="fade-up" data-aos-delay={index * 60}>
                            <div
                                className="testimonial-card h-100 p-4 position-relative"
                                style={{
                                    background: '#1e1c1c',
                                    borderRadius: '10px',
                                    border: '1px solid #2a2727',
                                }}
                            >
                                <FaQuoteRight
                                    size={28}
                                    style={{ position: 'absolute', top: '20px', right: '20px', color: 'rgba(255,75,43,0.3)' }}
                                />
                                <div className="d-flex mb-3" style={{ color: '#FFC107' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={14} className="me-1" />
                                    ))}
                                </div>
                                <p
                                    className="mb-4"
                                    style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, fontSize: '1rem' }}
                                    dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                                />
                                <div className="d-flex align-items-center gap-3">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        width={48}
                                        height={48}
                                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                                    />
                                    <div>
                                        <p className="mb-0 fw-bold text-white">{t.name}</p>
                                        <p className="mb-0" style={{ color: ACCENT, fontSize: '0.85rem' }}>{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
