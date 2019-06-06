import React from 'react';
import ReactDOM from 'react-dom';

// TODO -- 1. Import Apollo client and provider

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// TODO -- 2. Setup Apollo Client

// TODO -- 3 Render the Apollo Provider with the client
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
