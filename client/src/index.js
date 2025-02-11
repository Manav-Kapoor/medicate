import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
ReactDOM.render(<Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.getElementById('root')
);