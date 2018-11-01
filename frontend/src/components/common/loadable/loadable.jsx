import React from 'react';
import Loadable from 'react-loadable';

const LoadingScreen = ({ error, retry }) => {
  if (error) {
    return (
      <div>
        Error! <button onClick={retry}>Retry</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const loadable = loader =>
  Loadable({
    loader,
    loading: LoadingScreen,
  });

export default loadable;
