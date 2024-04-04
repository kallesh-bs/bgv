import React from 'react';

const LoaderComp = () => {
  return (
    <div className="container" data-testid='loader'>
      <div className="loader-container"></div>
      <div className="spinner"></div>
    </div>
  );
};

export default LoaderComp;
