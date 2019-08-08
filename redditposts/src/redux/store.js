import thunkMiddleware from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(rootReducer,
     composeWithDevTools(applyMiddleware(thunkMiddleware))
    );

