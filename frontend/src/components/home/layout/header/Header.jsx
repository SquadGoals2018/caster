import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <Alert color="primary">This is a primary alert — check it out!</Alert>
      </div>
    );
  }
}

export default Header;
