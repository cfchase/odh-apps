import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import '@patternfly/patternfly/utilities/Spacing/spacing.css';
import '@patternfly/react-core/dist/styles/base.css';
import './index.scss';
import {App} from './App';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

