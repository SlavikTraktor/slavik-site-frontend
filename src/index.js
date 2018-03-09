//react *****
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
//my files *****
import './index.css'
import App from './containers/App'
import rootReducer from "./reducers/index"
//redux ******
import { Provider } from "react-redux"
import {createStore, applyMiddleware } from "redux"
//devtools + middleware *********
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'))
