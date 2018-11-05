import React from 'react';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';
import Button from 'reactstrap/lib/Button';
import NavLink from 'reactstrap/lib/NavLink';

import RenderInput from 'components/common/forms/input/RenderInput';

import { required, email } from 'utils/validation';

const form = 'LOGIN';

const validate = values => {
  const errors = {};

  if (!required(values.email)) {
    errors.email = 'Required';
  } else if (!email(values.email)) {
    errors.email = 'Invalid email format';
  }

  if (!required(values.password)) {
    errors.password = 'Required';
  }

  return errors;
};

const onSubmit = async (values, _, props) => {
  try {
    console.log(values.username, values.password);
  } catch (e) {
    console.log(e);
  }
};

const LoginForm = props => {
  return (
    <Form
      onSubmit={props.handleSubmit(onSubmit)}
      className="d-flex justify-content-center flex-column mt-3"
    >
      <Field
        name="email"
        component={RenderInput}
        type="text"
        label="Email"
        attached
      />
      <Field
        name="password"
        component={RenderInput}
        type="text"
        label="Password"
        attached
      />

      <Button color="primary" className="w-25 mr-auto ml-auto mt-5">
        LOGIN
      </Button>

      <div className="d-flex p-3 mt-3 small">
        Don't have an account yet?{' '}
        <NavLink className="p-0 font-italic">Sign Up</NavLink>
      </div>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  accountLogin(user, password) {
    return dispatch;
  },
});

export default connect(
  null,
  mapDispatchToProps
)(
  reduxForm({
    form,
    validate,
    onSubmit,
  })(LoginForm)
);
