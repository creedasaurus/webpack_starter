import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderApp = (RootComponent) => {
    ReactDOM.render(<RootComponent />, document.getElementById('approot')); // eslint-disable-line
};

renderApp(App);

module.hot.accept('./App', () => {
  const HotApp = require('./App').default; // eslint-disable-line
  renderApp(HotApp);
});
