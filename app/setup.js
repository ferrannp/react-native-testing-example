import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import RepoPage from './containers/RepoPage';

export default class Root extends React.Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <RepoPage />
      </Provider>
    );
  }
}
