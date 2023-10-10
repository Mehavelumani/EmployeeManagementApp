import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
serviceWorker.unregister();
