import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import store, { history } from './store';

import HomeAbr from './screens/Home/abr';
import HomeApb from './screens/Home/apb';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/art-boca-raton" component={HomeAbr} />
            <Route path="/art-palm-beach" component={HomeApb} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
