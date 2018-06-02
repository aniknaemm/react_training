import React from 'react';
import PropTypes from 'prop-types';

const New = ({ title, text }) => {
  return (
    <div className="cardNew">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};
New.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default New;
