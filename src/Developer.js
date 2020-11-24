import React from 'react';
import developerPropTypes from './propTypes/developer';

Developer.propTypes = {
  developer: developerPropTypes.isRequired
};

function Developer({developer, developers}) {
  return (
    <div>
      <h2>{developer.name}</h2>
      <p>{developer.languages}</p>
      {developer.company && <p>{developer.company}</p>}
    </div>
  );
}

export default Developer;