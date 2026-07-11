import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const ACCENT = '#6C5CE7';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Mitchell',
        role: 'Founder, Lumen Skincare',
        avatar: 'https://i.pravatar.cc/150?img=47',
        quote: 'Ascendly rebuilt our paid social strategy from the ground up. Within four months our return on ad spend nearly tripled and we finally understood where our budget was going.',
    },
    {
        id: 2,
        name: 'David Okafor',
        role: 'CEO, Northbridge SaaS',
        avatar: 'https://i.pravatar.cc/150?img=12',
        quote: 'The SEO work Ascendly did took us from page three to top three rankings for our core keywords. Organic leads now make up almost half of our pipeline.',
    },
    {
        id: 3,
        name: 'Priya Nair',
        role: 'Marketing Director, Fenwick Retail',
        avatar: 'https://i.pravatar.cc/150?img=32',
        quote: 'What stood out was the transparency. Every month we get a clear breakdown of performance and next steps &mdash; no jargon, no guesswork.',
    },
    {
        id: 4,
        name: 'Marcus Lee',
        role: 'Owner, Lee & Co. Legal',
        avatar: 'https://i.pravatar.cc/150?img=15',
        quote: 'As a local service business, we needed leads, not vanity metrics. Ascendly delivered a steady stream of qualified consultations within weeks.',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" style={{ background: '#14132B', padding: '90px 0' }}>
            <Container>
                <Row className="justify-content-center mb-5" data-aos="fade-up">
                    <Col lg={8} className="text-center">
                        <p className="text-uppercase fw-semibold mb-2" style={{ color: ACCENT, letterSpacing: '1.5px', fontSize: '14px' }}>
                            CLIENT SUCCESS
                        </p>
                        <h2 className="text-white product_heading" style={{ color: '#fff' }}>What Our Clients Say</h2>
                        <div style={{ width: '50px', height: '3px', background: ACCENT, margin: '16px auto 0' }} />
                    </Col>
                </Row>

                <Row className="g-4">
                    {testimonials.map((t, index) => (
                        <Col key={t.id} xs={12} md={6} data-aos="fade-up" data-aos-delay={index * 60}>
                            <div
                                className="testimonial-card h-100 p-4 position-relative"
                                style={{
                                    background: '#1e1d47',
                                    borderRadius: '10px',
                                    border: '1px solid #2a2960',
                                }}
                            >
                                <FaQuoteRight
                                    size={28}
                                    style={{ position: 'absolute', top: '20px', right: '20px', color: 'rgba(108,92,231,0.3)' }}
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
