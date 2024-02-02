import React from 'react';
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
  Image,
} from 'react-native';
import { useState } from 'react';
import LoginStyles from './LoginStyles';
import InsetShadow from 'react-native-inset-shadow';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passFocus, setPassFocus] = useState(false);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={LoginStyles.background}>
      {/* Login text, top part of the view */}
      <View style={LoginStyles.loginContainer}>
        <Image style={LoginStyles.backArrow} source={require('./assets/icons8-left-arrow-100.png')} />
        <Text style={LoginStyles.loginText}>Login</Text>
      </View>

      {/* Layout of the buttons, middle display*/}
      <View>
        <Text></Text>
        <TextInput />
        <Text></Text>
        <TextInput />
        <Button title='Submit' />
      </View>

      {/* Brand text, bottom of display*/}
      <View>
        <Text>ALPACA © 2024</Text>
      </View>
    </SafeAreaView>
  );


  function checkLogin() {
    //fetch the backend API to check the login credentials
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
  }
};

export default Login;






/*<SafeAreaView style={LoginStyles.container}>
  <Text style={LoginStyles.textStyle}>Login</Text>
  <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <KeyboardAvoidingView
      behavior={Platform.OS === !'ios' ? 'height': 'none'}
      style={LoginStyles.front}
    >
      <View style={passFocus ? LoginStyles.inputViewFocus : LoginStyles.inputView}>
        <Text style={LoginStyles.labelInput}>Username</Text>
        <InsetShadow containerStyle={LoginStyles.innerShadow} shadowRadius={4} shadowOpacity={0.4}>
          <TextInput
            style={LoginStyles.textInput}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </InsetShadow>
        <Text style={LoginStyles.labelInput}>Password</Text>
        <InsetShadow containerStyle={LoginStyles.innerShadow} shadowRadius={4} shadowOpacity={0.4}>
          <TextInput
            style={LoginStyles.textInput}
            onChangeText={(text) => setPassword(text)}
            value={password}
            onFocus={() => setPassFocus(true)}
            onBlur={() => setPassFocus(false)}
            secureTextEntry={true}
          />
        </InsetShadow>
        <TouchableHighlight style={LoginStyles.button} onPress={() =>  
            navigation.navigate('MainView')
        }>
            <Text style={LoginStyles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
  <Text style={LoginStyles.brand}>ALPACA © 2024</Text>
</SafeAreaView>*/