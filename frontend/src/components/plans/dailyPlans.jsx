import React, { Component } from 'react';
// import {bindActionCreators} from "redux";
// import {connect} from "react-redux";
import { Container, Col, Row } from 'reactstrap';
import "./plans.css";

class Plans extends Component {
  renderDetails = () => {
    return (
      <div className="planDetails">
        PRIVATE: POTATO
        Details: POTATO POTATO POTATO
      </div>
    );
  }

  profileCard = () => {
    const exampleUser =  
        {
            id: 1,
            image: "https://www.usmagazine.com/wp-content/uploads/2018/06/Smoothie-the-Cat-Instagram-zoom.jpg?w=640",
            first_name: "Pato",
            last_name: "Togademan",
        };
    return (
      <div className="membersCard">
        <Row>
            <Col xs="4">
                <img className="userAvatar" src={exampleUser.image} />
            </Col>
        </Row>
      </div>
    );
  }

  render() {
    return (
      <Container className="container">
        <Row className="containerRow">
            <Col md="7" xs="12">
                <Row><h1>PLANS</h1></Row>
                <Row>{this.renderDetails()}</Row>
            </Col>
            <Col md="4" xs="12">
              <Row>
                {this.profileCard()}
              </Row>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Plans;