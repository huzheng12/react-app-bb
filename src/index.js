import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss'
import { Provider } from 'react-redux'
import Routes from '@/route';
import store from './reducers/store';
import "react-app-polyfill/ie11";
function hotRender() {
    ReactDOM.render(
        <Provider store={store}>
            <Routes />
        </Provider>
        , document.getElementById('root'));
}
hotRender()
store.subscribe(hotRender)
serviceWorker.unregister();
