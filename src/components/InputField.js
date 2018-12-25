import React from 'react';
import { InputGroup, FormControl, Glyphicon } from "react-bootstrap";

const InputField = (props) => {
  return(
    <InputGroup className="inputField">
      <FormControl
        type={props.type}
        placeholder={props.placeholder}
        onKeyUp={props.action}
        name={props.name}
        value={props.value}
        readOnly
      />
      <InputGroup.Addon>
        <Glyphicon glyph={props.icon} />
      </InputGroup.Addon>
    </InputGroup>
  )
}

export default InputField;
