import React from 'react';

const Alert = ({ mensaje, tipo }) => {
  return <div className={`alert alert-${tipo}`}>{mensaje}</div>;
};

export default Alert;
