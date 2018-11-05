import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';

// Add this import:
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = () => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

// Do this once
serviceWorker.unregister();

// Render once
render();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('components/App', () => {
    render();
  });
}
