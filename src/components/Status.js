import React from 'react';
import {Glyphicon} from 'react-bootstrap';

const Status = (props) => {
  return(
    <div className="row statusItem">
      <div className="col-md-8">
        {props.name}
      </div>
      <div className="col-2">
        <Glyphicon className={props.statusColor} glyph={props.status} />
      </div>
    </div>
  );
}

export default Status;
