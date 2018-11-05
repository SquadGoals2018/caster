import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import InputGroup from 'reactstrap/lib/InputGroup';
import InputGroupAddon from 'reactstrap/lib/InputGroupAddon';

const RenderInput = props => {
  const {
    attached,
    input,
    label,
    type,
    readOnly,
    placeholder,
    autoFocus,
    required,
    disabled,
    meta: { touched, error, invalid },
  } = props;

  if (attached) {
    return (
      <div className="m-3">
        <InputGroup>
          <InputGroupAddon addonType="prepend">{label}</InputGroupAddon>
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
        </InputGroup>
        <span className="small text-danger">{invalid && touched && error}</span>
      </div>
    );
  }

  return (
    <FormGroup className="m-3">
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
      <span>{invalid && touched && error}</span>
    </FormGroup>
  );
};

RenderInput.propTypes = {
  attached: PropTypes.bool,
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
    invalid: PropTypes.bool,
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
