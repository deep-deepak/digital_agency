import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPaperPlane, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ACCENT = '#6C5CE7';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                {/* Main Footer Content */}
                <Row className="gy-4">
                    {/* Logo and Company Info */}
                    <Col lg={3} md={6}>
                        <div className="mb-4">
                            <h3
                                style={{
                                    fontFamily: '"Oswald", sans-serif',
                                    fontWeight: 700,
                                    fontSize: '24px',
                                    letterSpacing: '1px',
                                    marginBottom: '14px',
                                }}
                            >
                                ASCEND<span style={{ color: ACCENT }}>LY</span>
                            </h3>
                            <p className="mb-4">
                                Ascendly Digital Marketing is a full-service growth agency helping brands win with SEO, paid media, social, content, and conversion-focused web design.
                            </p>
                            <div className="d-flex gap-3 social_icon">
                                <a href="#" aria-label="Facebook" className="text-light"><FaFacebookF size={18} /></a>
                                <a href="#" aria-label="Instagram" className="text-light"><FaInstagram size={18} /></a>
                                <a href="#" aria-label="LinkedIn" className="text-light"><FaLinkedinIn size={18} /></a>
                                <a href="#" aria-label="Twitter" className="text-light"><FaTwitter size={18} /></a>
                            </div>
                        </div>
                    </Col>

                    {/* Quick Links */}
                    <Col lg={3} md={6}>
                        <h5 className="mb-4" style={{ color: ACCENT }}>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link href="#home" className="text-light text-decoration-none">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#about" className="text-light text-decoration-none">About Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#services" className="text-light text-decoration-none">Services</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#process" className="text-light text-decoration-none">Our Process</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#testimonials" className="text-light text-decoration-none">Testimonials</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#contact" className="text-light text-decoration-none">Contact</Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Contact Info */}
                    <Col lg={3} md={6}>
                        <h5 className="mb-4" style={{ color: ACCENT }}>Contact Info</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <p className="mb-0 fw-bold">Address:</p>
                                <p className="mb-0">500 Market Street, Suite 250,</p>
                                <p className="mb-0">San Francisco, CA 94105</p>
                            </li>
                            <li className="mb-3">
                                <p className="mb-0">Phone: +1 (555) 013-4820</p>
                            </li>
                            <li className="mb-3">
                                <p className="mb-0">Email: hello@ascendlydigital.com</p>
                            </li>
                            <li className="mb-3">
                                <p className="mb-0">Mon – Fri: 9:00 AM – 6:00 PM</p>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5 className="mb-4" style={{ color: ACCENT }}>Newsletter</h5>
                        <p className="mb-4">Get marketing tips and industry insights straight to your inbox.</p>
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Your email"
                                aria-label="Your email"
                            />
                            <button
                                className="btn d-flex align-items-center"
                                type="button"
                                style={{ background: ACCENT, border: `1px solid ${ACCENT}`, color: '#fff' }}
                            >
                                <FaPaperPlane size={16} />
                            </button>
                        </div>
                    </Col>
                </Row>

                {/* Bottom Footer */}
                <Row className="mt-5">
                    <Col className="text-center">
                        <hr className="my-4" />
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Ascendly Digital Marketing. All rights reserved.
                        </p>
                        <p className="mb-0 mt-2" style={{ fontSize: '13px', opacity: 0.6 }}>
                            Placeholder business details for demonstration &mdash; replace with your real agency information.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
