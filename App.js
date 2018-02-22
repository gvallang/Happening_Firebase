import React, { Component } from 'react';

import { Provider } from 'react-redux';

import Router from './app/config/routes'
import store from './app/redux/store';
import fire_init from './app/config/firebase';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}