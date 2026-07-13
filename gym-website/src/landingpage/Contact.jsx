import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ACCENT = '#FF4B2B';

const Contact = () => {
    return (
        <section id="contact" style={{ background: '#f4f4f4', padding: '90px 0' }}>
            <Container>
                <Row className="justify-content-center mb-5" data-aos="fade-up">
                    <Col lg={8} className="text-center">
                        <p className="text-uppercase fw-semibold mb-2" style={{ color: ACCENT, letterSpacing: '1.5px', fontSize: '14px' }}>
                            GET IN TOUCH
                        </p>
                        <h2 className="product_heading">Start Your Fitness Journey Today</h2>
                        <div style={{ width: '50px', height: '3px', background: ACCENT, margin: '16px auto 0' }} />
                    </Col>
                </Row>

                <Row className="justify-content-between g-4">
                    <Col lg={5} data-aos="fade-right">
                        <h5 className="mb-2">Gym Name</h5>
                        <p className="mb-4" style={{ color: ACCENT, fontWeight: 600 }}>ApexFit Gym</p>

                        <div className="d-flex align-items-start gap-3 mb-4">
                            <FaMapMarkerAlt size={20} style={{ color: ACCENT, marginTop: '4px' }} />
                            <div>
                                <h6 className="mb-1">Address</h6>
                                <p className="mb-0 text-muted">120 Ironworks Avenue, Austin, TX 78701</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3 mb-4">
                            <FaPhoneAlt size={18} style={{ color: ACCENT, marginTop: '4px' }} />
                            <div>
                                <h6 className="mb-1">Phone</h6>
                                <a href="tel:+15550427710" className="text-decoration-none text-muted">
                                    +1 (555) 042-7710
                                </a>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3 mb-4">
                            <FaEnvelope size={18} style={{ color: ACCENT, marginTop: '4px' }} />
                            <div>
                                <h6 className="mb-1">Email</h6>
                                <a href="mailto:hello@apexfitgym.com" className="text-decoration-none text-muted">
                                    hello@apexfitgym.com
                                </a>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3 mb-4">
                            <FaClock size={18} style={{ color: ACCENT, marginTop: '4px' }} />
                            <div>
                                <h6 className="mb-1">Gym Hours</h6>
                                <p className="mb-0 text-muted">Mon &ndash; Sat: 5:00 AM &ndash; 10:00 PM</p>
                                <p className="mb-0 text-muted">Sun: 7:00 AM &ndash; 6:00 PM</p>
                            </div>
                        </div>

                        <p style={{ fontSize: '13px', color: '#999', marginTop: '20px' }}>
                            Placeholder contact details shown for demonstration purposes &mdash; update with your real gym information.
                        </p>
                    </Col>

                    <Col lg={6} data-aos="fade-left">
                        <Form className="bg-white p-4 shadow-sm rounded">
                            <Form.Group className="mb-3">
                                <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" required />
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="tel" placeholder="Enter your phone number" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" required />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Which program are you interested in?</Form.Label>
                                <Form.Select>
                                    <option>Personal Training</option>
                                    <option>Group Fitness Classes</option>
                                    <option>Strength &amp; Conditioning</option>
                                    <option>Yoga &amp; Mobility</option>
                                    <option>Nutrition Coaching</option>
                                    <option>Online Coaching</option>
                                    <option>Not sure yet</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Tell us about your fitness goals"
                                    required
                                />
                            </Form.Group>

                            <Button type="submit" className="px-4 submit_btn_contact">
                                SEND MESSAGE
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <style>{`
                .submit_btn_contact {
                    background: ${ACCENT};
                    border: 1px solid ${ACCENT};
                    color: #fff;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }
                .submit_btn_contact:hover {
                    background: #d93c1f;
                    border-color: #d93c1f;
                }
            `}</style>
        </section>
    );
};

export default Contact;
