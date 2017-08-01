import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import UserInfo from './components/userInfo'
import reducer from './reducers'
import thunk from 'redux-thunk';
const store = createStore(reducer,  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));





ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App} />
    <Route path='/reactlearn/component' component={UserInfo} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

//registerServiceWorker();
