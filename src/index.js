import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';

import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
))

ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>,
  document.getElementById('root')
);
