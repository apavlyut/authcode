import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LoadingScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>
          {this.props.loadingText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loading: {
    color: 'green'
  },
});
