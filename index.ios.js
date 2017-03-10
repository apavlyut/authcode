import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import AppContainer from './app/containers/AppContainer'

export default class authcode extends Component {
  render() {
    return (
      <AppContainer/ >
    );
  }
}

AppRegistry.registerComponent('authcode', () => authcode);
