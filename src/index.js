import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Components/App';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
