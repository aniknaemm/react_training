import React from 'react';

const New = ({ title, text }) => {
  return (
    <div className="cardNew">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};
export default New;
