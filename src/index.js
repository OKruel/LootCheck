//Imports from React
import React from 'react'
import { render } from 'react-dom'
//Imports from Redux e React=Redux
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
//Imports from User Files
//Main files
import App from './components/App'
//Reducer files
import rootReducer from './store/reducers'
import './index.css'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <App></App>
    </Provider>
    , document.getElementById('root')
)
