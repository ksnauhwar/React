import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import todostore from './redux/todostore';
import App from './components/App';
import {TodoContext} from './redux/TodoContext';
import visibilityStore from './redux/visibilityStore';
import {VisibilityFilterContext} from './redux/VisiblityFilterContext';

ReactDOM.render(
    <Provider context={TodoContext} store={todostore}>
        <Provider context={VisibilityFilterContext} store={visibilityStore}>
         <App/>
        </Provider>
    </Provider>,
    document.getElementById('root'));