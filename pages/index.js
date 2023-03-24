import {Button, Col, Container, Navbar, Row} from 'react-bootstrap';
import Link from 'next/link'
export default function Home() {
  return (
      <>
          <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                  <Link href="/" passHref legacyBehavior>
                    <Navbar.Brand>mcpe.fun</Navbar.Brand>
                  </Link>
              </Container>
          </Navbar>
          <div className="jumbotron bg-body-tertiary mb-5">
              <Container>
                  <h4 className="display-5 fw-bold">Welcome to mcpe.fun!</h4>
                  <p className="fs-4">mcpe.fun is the home of PocketMine Tools, a collection of web-based utilities for
                      PocketMine-MP server owners and plugin developers.</p>
                  <Button variant="primary" size="lg" href="https://pmt.mcpe.fun">Visit PocketMine Tools</Button>
              </Container>
          </div>
          <Container>
          <Row className="text-center mx-3">
              <Col lg={4}>
                <i className="bi-phone icon"></i>
                <h2 className="fw-normal">Mobile friendly</h2>
                <p>PocketMine Tools is fully responsive and light on bandwidth.</p>
              </Col>
              <Col lg={4}>
                  <i className="bi-lock icon"></i>
                  <h2 className="fw-normal">Safe and secure</h2>
                  <p>All plugin conversions are done locally and in-browser. This means your plugin is never sent anywhere you don&apos;t expect.</p>
              </Col>
              <Col lg={4}>
                  <i className="bi-github icon"></i>
                  <h2 className="fw-normal">Open-source</h2>
                  <p>PocketMine Tools has been 100% open-source since the beginning. Version 2 and onward are licensed under the <code>MIT</code> license.</p>
              </Col>
          </Row>
              <footer className="pt-3 pb-4 mt-3 text-body-secondary border-top">
                  Made with <i className="bi-heart-fill text-danger" /> in Canada by <a href="https://nathfreder.dev">Nathan Fredericks</a>
              </footer>
          </Container>
      </>
  )
}