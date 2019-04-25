import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { reducerGetRestaurants } from './redux/reducers';

const logger = createLogger();
const store = createStore(
	combineReducers({reducerGetRestaurants}), 
	applyMiddleware(thunkMiddleware,logger)
	)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
