import React from 'react';
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <div>
      <img className="img4" src="img4.jpg" />
      <NavLink to="/">
        <button className="submit">Go Back</button>
      </NavLink>
    </div>
  );
}

export default Error;
