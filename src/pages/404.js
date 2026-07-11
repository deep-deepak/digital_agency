// pages/404.js
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/layout/Layout';

const Custom404 = () => {
  return (
    <Layout>
      <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <Row className="text-center">
          <Col>
            <h1 className="display-1" style={{ color: '#6C5CE7' }}>404</h1>
            <h2>Page Not Found</h2>
            <p className="lead">Oops! The page you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.</p>
            <Link href="/" passHref>
              <Button style={{ background: '#6C5CE7', border: '1px solid #6C5CE7' }} size="lg">
                Go Back to Homepage
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Custom404;
