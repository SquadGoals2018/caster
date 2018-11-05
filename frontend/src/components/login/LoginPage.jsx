import React from 'react';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

import Image from 'components/common/image/Image';

import LoginForm from './LoginForm';

const LoginPage = () => (
  <Container
    fluid
    className="d-flex flex-column align-content-center justify-content-center h-100"
  >
    <Row>
      <Col className="d-flex justify-content-center p-3">
        <Image src="/images/logo.png" />
      </Col>
    </Row>
    <Row className="d-flex justify-content-center">
      <Col xs="6">
        <LoginForm />
      </Col>
    </Row>
  </Container>
);

export default LoginPage;
