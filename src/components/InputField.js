import React from 'react';
import { InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

const InputField = ({
  type, placeholder, action, name, value, icon,
}) => (
  <InputGroup className="inputField">
    <FormControl
      type={type}
      placeholder={placeholder}
      onKeyUp={action}
      name={name}
      value={value}
      readOnly
    />
    <InputGroup.Addon>
      <Glyphicon glyph={icon} />
    </InputGroup.Addon>
  </InputGroup>
);

export default InputField;
