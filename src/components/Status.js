import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const Status = ({ name, status, statusColor }) => (
  <div className="row statusItem">
    <div className="col-md-8">
      {name}
    </div>
    <div className="col-2">
      <Glyphicon className={statusColor} glyph={status} />
    </div>
  </div>
);

export default Status;
