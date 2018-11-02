import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';

import Container from 'reactstrap/lib/Container';
// import Form from 'reactstrap/lib/Form';

import RenderInput from 'components/common/forms/input/RenderInput';
import { required, email } from 'utils/validation';

const form = 'LOGIN';

const validate = values => {
  console.log('validate');
  const errors = {};

  if (!required(values.email)) {
    errors.email = 'Required';
  } else if (!email(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

class Login extends Component {
  static defaultProps = {
    prop: '',
  };

  render() {
    return (
      <Container fluid>
        <Form onSubmit={() => console.log('submit!')}>
          <Field
            name="email"
            component={RenderInput}
            type="text"
            label="email"
          />
          <Field
            name="password"
            component={RenderInput}
            type="text"
            label="password"
          />
        </Form>
      </Container>
    );
  }
}

export default reduxForm({
  form,
  validate,
})(Login);
