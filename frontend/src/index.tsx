import React from 'react';
import ReactDOM from 'react-dom';
import '@patternfly/patternfly/utilities/Spacing/spacing.css';
import '@patternfly/react-core/dist/styles/base.css';
import './index.scss';
import App from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

