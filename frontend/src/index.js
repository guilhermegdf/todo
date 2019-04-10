import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore }  from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import reducers from './reducers';
import Todo from './todo';

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)
ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>
, document.getElementById('root'));
