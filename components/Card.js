import React from 'react';
import { render } from 'react-dom';

export default (props) => {
  const {movie: { name, description }} = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

