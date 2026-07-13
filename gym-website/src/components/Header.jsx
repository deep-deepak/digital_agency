import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const navItems = [
    { id: 'home', label: 'HOME', path: '#home' },
    { id: 'about', label: 'ABOUT', path: '#about' },
    { id: 'programs', label: 'PROGRAMS', path: '#programs' },
    { id: 'process', label: 'MEMBERSHIP', path: '#process' },
    { id: 'testimonials', label: 'TESTIMONIALS', path: '#testimonials' },
    { id: 'faq', label: 'FAQ', path: '#faq' },
    { id: 'contact', label: 'CONTACT', path: '#contact' },
];

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleNavClick = () => {
        setIsExpanded(false);
    };

    return (
        <Navbar
            expand="lg"
            variant="dark"
            expanded={isExpanded}
            onToggle={(expanded) => setIsExpanded(expanded)}
            className="py-2 py-lg-3 navbar-custom"
        >
            <Container>
                <Navbar.Brand
                    href="#home"
                    className="d-flex align-items-center"
                    onClick={handleNavClick}
                    style={{
                        fontFamily: '"Oswald", sans-serif',
                        fontWeight: 700,
                        fontSize: '26px',
                        letterSpacing: '1px',
                        color: '#ffffff',
                    }}
                >
                    APEX<span style={{ color: '#FF4B2B' }}>FIT</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-lg-center">
                        {navItems.map((item) => (
                            <Nav.Link
                                key={item.id}
                                href={item.path}
                                className="nav-link-custom"
                                onClick={handleNavClick}
                            >
                                {item.label}
                            </Nav.Link>
                        ))}
                        <Nav.Link
                            href="#contact"
                            className="cta-link-custom ms-lg-3"
                            onClick={handleNavClick}
                        >
                            JOIN NOW
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <style>{`
                .navbar-custom {
                    background-color: #0D0D0D;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1030;
                    opacity: 0.97;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                }

                .nav-link-custom {
                    color: white !important;
                    transition: all 0.3s ease;
                    padding: 0.5rem 1rem;
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                    margin: 0 0.2rem;
                    position: relative;
                }

                .nav-link-custom:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    background: #FF4B2B;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: width 0.3s ease;
                }

                .nav-link-custom:hover:after {
                    width: 70%;
                }

                .nav-link-custom:hover {
                    color: #FF4B2B !important;
                }

                .cta-link-custom {
                    color: #ffffff !important;
                    background-color: #FF4B2B;
                    border-radius: 4px;
                    padding: 0.5rem 1.2rem !important;
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    transition: all 0.3s ease;
                }

                .cta-link-custom:hover {
                    background-color: #d93c1f;
                    color: #ffffff !important;
                }

                .navbar-toggler {
                    border-color: rgba(255,255,255,0.3);
                    padding: 0.375rem 0.5rem;
                }

                .navbar-toggler:focus {
                    box-shadow: 0 0 0 3px rgba(255, 75, 43, 0.25);
                    outline: none;
                }

                @media (max-width: 991px) {
                    .navbar-custom {
                        padding: 0.5rem 0;
                    }

                    .navbar-collapse {
                        background-color: #0D0D0D;
                        padding: 1rem;
                        margin: 0 -1rem;
                        max-height: calc(100vh - 70px);
                        overflow-y: auto;
                        border-top: 1px solid #23222a;
                    }

                    .nav-link-custom {
                        padding: 0.75rem 1rem;
                        margin: 0.25rem 0;
                        border-radius: 4px;
                    }

                    .nav-link-custom:after {
                        display: none;
                    }

                    .nav-link-custom:hover {
                        background-color: #1e1d1d;
                        padding-left: 1.5rem;
                        border-left: 3px solid #FF4B2B;
                    }

                    .cta-link-custom {
                        display: inline-block;
                        margin-top: 0.5rem;
                        text-align: center;
                    }
                }
            `}</style>
        </Navbar>
    );
};

export default Header;
