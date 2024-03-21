import React from 'react';

function LoadingError({ isLoading, error }) {
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoadingError;
