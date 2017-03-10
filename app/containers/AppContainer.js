import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  AsyncStorage
} from 'react-native';

import TabBar from './../components/TabBar'
import LoadingScreen from './../components/LoadingScreen'
import PinCode from './../components/PinCode'
import SignUpForm from './../components/SignUpForm'

export default class AppContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      authStep: 'loading'
    }
    console.log('before accessToken: ');
    this.loadToken();
    console.log('after accessToken: ');
  }

  async loadToken() {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken !== null){
        // We have data!!
        console.log('accessToken: ', accessToken);
        this.setState({
          authStep: 'checkedToken',
          isLoggedIn: true
        })
      } else {
        console.log('accessToken is NULL');
        this.setState({
          authStep: 'checkedToken',
          isLoggedIn: false
        })
      }
    } catch (error) {
      console.log('error accessToken: ', error)
      // Error retrieving data
      this.setState({
        authStep: 'checkTokenError'
      })
    }
  }

  render() {
    if (this.state.authStep == 'loading') {
      return (
        <View style={styles.container}>
          <LoadingScreen loadingText='Загрузка ...'/>
          <PinCode />
          <TouchableOpacity style={{flex: -1, padding: 20, alignItems: 'center'}}  onPress={(e) => this.setState({isLoggedIn: false})}>
            <Text>Выйти</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (this.state.authStep == 'checkedToken'){
      if (this.state.isLoggedIn) {
        return (
          <View style={styles.container}>
            <PinCode />
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <SignUpForm/>
          </View>
        );
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
