import React from 'react';
import PropTypes from 'prop-types';

const List = ({ link, label }) => (
  <li>
    <a href={link} target="_blank">
      <img src={`./${label}.png`} />
    </a>
  </li>
);
List.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string
};

export default List;
