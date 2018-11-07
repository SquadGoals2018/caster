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

  renderMembersCard = () => {
    const exampleUsers = [
        {
            id: 1,
            image: "https://www.usmagazine.com/wp-content/uploads/2018/06/Smoothie-the-Cat-Instagram-zoom.jpg?w=640",
            first_name: "Pato",
            last_name: "Togademan",
        },
        {
            id: 2,
            image: "https://www.usmagazine.com/wp-content/uploads/2018/06/Smoothie-the-Cat-Instagram-zoom.jpg?w=640",
            first_name: "Junarman",
            last_name: "Alinsub",
        },
        {
            id: 3,
            image: "https://www.usmagazine.com/wp-content/uploads/2018/06/Smoothie-the-Cat-Instagram-zoom.jpg?w=640",
            first_name: "Naicaman",
            last_name: "Suplido",
        },
        {
            id: 4,
            image: "https://www.usmagazine.com/wp-content/uploads/2018/06/Smoothie-the-Cat-Instagram-zoom.jpg?w=640",
            first_name: "Lineman",
            last_name: "Aguila",
        }
    ];
    return (
      <div className="membersCard">
        <h1>Members</h1>
        <Row>
            {exampleUsers.map(u => {
                return this.renderMembersImage(u);
            })}
        </Row>
      </div>
    );
  }

  renderMembersImage = (user) => {
    return (
      <Col xs="4" key={user.id}>
        <img className="memberAvatar" src={user.image} />
      </Col>
    );
  }

  render() {
    return (
      <Container className="container">
        <Row>
            <Col>
                <Row><h1>PLANS</h1></Row>
                <Row>{this.renderDetails()}</Row>
            </Col>
            <Col xs="4">{this.renderMembersCard()}</Col>
        </Row>
      </Container>
    );
  }
}

export default Plans;