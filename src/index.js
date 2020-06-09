import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/AppSection5StylingComponents';
//import App from './AppSection4';
//import App from './AppWithHooks'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
