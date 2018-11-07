import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import "./plans.css";
import { Alert, Container, Col } from 'reactstrap';

class Plans extends Component {
  renderDetails = () => {
    return (
      <Container>
        PRIVATE: POTATO
        Details: POTATO POTATO POTATO
      </Container>
    );
  }

  render() {
    return (
      <Container>
        <Col>Plans</Col>
        <Col>{this.renderDetails}</Col>
      </Container>
    );
  }
}

export default Plans;
