import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    FaSearch,
    FaBullhorn,
    FaShareAlt,
    FaPenNib,
    FaEnvelopeOpenText,
    FaLaptopCode,
} from 'react-icons/fa';

const ACCENT = '#6C5CE7';

const services = [
    {
        id: 1,
        icon: <FaSearch size={28} />,
        title: 'Search Engine Optimization',
        description: 'On-page, technical, and off-page SEO that improves rankings and drives sustainable organic traffic.',
    },
    {
        id: 2,
        icon: <FaBullhorn size={28} />,
        title: 'Paid Media & PPC',
        description: 'Google, Meta, and LinkedIn ad campaigns engineered for a measurable return on ad spend.',
    },
    {
        id: 3,
        icon: <FaShareAlt size={28} />,
        title: 'Social Media Marketing',
        description: 'Strategy, content, and community management that builds engaged, loyal audiences.',
    },
    {
        id: 4,
        icon: <FaPenNib size={28} />,
        title: 'Content Marketing',
        description: 'Blogs, videos, and assets that establish authority and move prospects through the funnel.',
    },
    {
        id: 5,
        icon: <FaEnvelopeOpenText size={28} />,
        title: 'Email & CRM Marketing',
        description: 'Automated flows and campaigns that nurture leads and maximize customer lifetime value.',
    },
    {
        id: 6,
        icon: <FaLaptopCode size={28} />,
        title: 'Web Design & CRO',
        description: 'Fast, conversion-focused websites and landing pages built to turn visitors into customers.',
    },
];

const ServicesSection = () => {
    return (
        <section id="services" style={{ background: '#f8f9fa', padding: '90px 0' }}>
            <Container>
                <Row className="justify-content-center mb-5" data-aos="fade-up">
                    <Col lg={8} className="text-center">
                        <p className="text-uppercase fw-semibold mb-2" style={{ color: ACCENT, letterSpacing: '1.5px', fontSize: '14px' }}>
                            WHAT WE DO
                        </p>
                        <h2 className="product_heading">Services Built to Grow Your Business</h2>
                        <div style={{ width: '50px', height: '3px', background: ACCENT, margin: '16px auto 0' }} />
                    </Col>
                </Row>

                <Row className="g-4">
                    {services.map((service, index) => (
                        <Col key={service.id} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay={index * 50}>
                            <div
                                className="service-card h-100 p-4"
                                style={{
                                    background: '#fff',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                    border: '1px solid #eee',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(108,92,231,0.15)';
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
                                        background: 'rgba(108,92,231,0.1)',
                                        color: ACCENT,
                                    }}
                                >
                                    {service.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#14132B' }}>
                                    {service.title}
                                </h3>
                                <p style={{ color: '#555', marginBottom: 0, lineHeight: 1.7 }}>
                                    {service.description}
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ServicesSection;
