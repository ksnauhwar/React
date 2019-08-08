import store from './redux/store';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<Provider store={store}><App></App></Provider>,document.getElementById('root'));

