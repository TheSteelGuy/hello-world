import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {combineReducers, createStore} from 'redux'

function userReducer(state='', action){
    switch (action.type){
        case 'updateUser':
        return action.payload
    }
    return state
}
function producReducer(state=[], action){
    return state
}

const allReducers = combineReducers({
    'users' : userReducer,
    'products' : producReducer
})

const store = createStore(
    allReducers, 
    {
        'products' : [{'name':'test initialState'}],
        'users' : 'jane'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


console.log(store.getState())

const updateUserActionCreattor = {
    'type' : 'updateUser',
    'payload' : 
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
