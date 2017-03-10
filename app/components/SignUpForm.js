import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class SignUpForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      phone: null,
      message: 'Введите телефон'
    }
  }

  async storeToken(){
    try {
      await AsyncStorage.setItem('accessToken', JSON.stringify(123));
      console.log("accessToken stored!")
    } catch (error) {
      console.log("error setting token: ", error)
    }
  }
  
  _checkPhone() {
    if (this.state.phone == null) {
      message: 'Телефон не может быт пустым'
    } else {
      this.storeToken()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.message}
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', padding: 10, borderWidth: 1, margin: 20}}
          onChange={(text) => this.setState({
            phone: text
          })}>
        </TextInput>
        <TouchableOpacity
          style={{flex: -1, backgroundColor: '#eee', padding: 30, paddingTop: 20, paddingBottom: 20 }}
          onPress={(e) => this._checkPhone()}>

          <Text style={{fontSize: 20}}>Авторизоваться</Text>
        </TouchableOpacity>
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
});
