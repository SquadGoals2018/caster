import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';

const RenderInput = props => {
  const {
    input,
    label,
    type,
    readOnly,
    placeholder,
    autoFocus,
    required,
    disabled,
    meta: { touched, error },
  } = props;

  console.log(touched, error);

  return (
    <FormGroup>
      <Label for={input.name}>
        {label}
        {required && ' *'}
      </Label>
      <Input
        {...input}
        autoFocus={autoFocus && autoFocus}
        type={type}
        name={input.name}
        id={input.name}
        readOnly={readOnly ? true : false}
        placeholder={placeholder ? placeholder : `Enter ${label}`}
        invalid={touched && error ? true : null}
        disabled={disabled}
      />
    </FormGroup>
  );
};

RenderInput.propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
  required: PropTypes.bool,
  width: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.object),
  disabled: PropTypes.bool,
};

RenderInput.defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  readOnly: false,
};

export default RenderInput;
