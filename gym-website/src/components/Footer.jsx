import { Container, Row, Col } from 'react-bootstrap';
import { FaPaperPlane, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const ACCENT = '#FF4B2B';

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
                                APEX<span style={{ color: ACCENT }}>FIT</span>
                            </h3>
                            <p className="mb-4">
                                ApexFit Gym is a full-service fitness center helping members build strength, endurance, and confidence through personal training, group classes, and nutrition coaching.
                            </p>
                            <div className="d-flex gap-3 social_icon">
                                <a href="#" aria-label="Facebook" className="text-light"><FaFacebookF size={18} /></a>
                                <a href="#" aria-label="Instagram" className="text-light"><FaInstagram size={18} /></a>
                                <a href="#" aria-label="YouTube" className="text-light"><FaYoutube size={18} /></a>
                                <a href="#" aria-label="Twitter" className="text-light"><FaTwitter size={18} /></a>
                            </div>
                        </div>
                    </Col>

                    {/* Quick Links */}
                    <Col lg={3} md={6}>
                        <h5 className="mb-4" style={{ color: ACCENT }}>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#home" className="text-light text-decoration-none">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#about" className="text-light text-decoration-none">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#programs" className="text-light text-decoration-none">Programs</a>
                            </li>
                            <li className="mb-2">
                                <a href="#process" className="text-light text-decoration-none">Membership</a>
                            </li>
                            <li className="mb-2">
                                <a href="#testimonials" className="text-light text-decoration-none">Testimonials</a>
                            </li>
                            <li className="mb-2">
                                <a href="#contact" className="text-light text-decoration-none">Contact</a>
                            </li>
                        </ul>
                    </Col>

                    {/* Contact Info */}
                    <Col lg={3} md={6}>
                        <h5 className="mb-4" style={{ color: ACCENT }}>Contact Info</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <p className="mb-0 fw-bold">Address:</p>
                                <p className="mb-0">120 Ironworks Avenue,</p>
                                <p className="mb-0">Austin, TX 78701</p>
                            </li>
                            <li className="mb-3">
                                <p className="mb-0">Phone: +1 (555) 042-7710</p>
                            </li>
                            <li className="mb-3">
                                <p className="mb-0">Email: hello@apexfitgym.com</p>
                            </li>
                            <li className="mb-3">
                                <p className="mb-0">Mon &ndash; Sat: 5:00 AM &ndash; 10:00 PM</p>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5 className="mb-4" style={{ color: ACCENT }}>Newsletter</h5>
                        <p className="mb-4">Get workout tips and member offers straight to your inbox.</p>
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
                            &copy; {new Date().getFullYear()} ApexFit Gym. All rights reserved.
                        </p>
                        <p className="mb-0 mt-2" style={{ fontSize: '13px', opacity: 0.6 }}>
                            Placeholder business details for demonstration &mdash; replace with your real gym information.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
