import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import store, { history } from './store';

import Home from './screens/Home';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route exact path="/art-boca-raton" component={Home} />
        </ConnectedRouter>
      </Provider>
    );
  }
}
