import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Container from 'reactstrap/lib/Container';
import Form from 'reactstrap/lib/Form';

import RenderInput from 'components/common/forms/input/RenderInput';
import { required, email } from 'utils/validation';

const form = 'LOGIN';

const validate = values => {
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
        <Form>
          <Field name="email" type="email" component={RenderInput} />
        </Form>
      </Container>
    );
  }
}

export default connect()(
  reduxForm({
    form,
    validate,
  })(Login)
);
