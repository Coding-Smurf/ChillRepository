import React, { useState, useRef } from 'react';
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
  Animated,
  Image
} from 'react-native';
import LoginStyles from './LoginStyles';
import InsetShadow from 'react-native-inset-shadow';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passFocus, setPassFocus] = useState(false);
  const inputAnimation = useRef(new Animated.Value(0)).current;

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleFocus = () => {
    setPassFocus(true);
    Animated.timing(inputAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setPassFocus(false);
    Animated.timing(inputAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const inputStyle = {
    transform: [
      {
        translateY: inputAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50], // You can adjust the translateY value for the desired animation
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={LoginStyles.container}>
      <View style={LoginStyles.header}>
        <TouchableHighlight style={LoginStyles.backIconWrapper} onPress={() => navigation.navigate('MainView')}>
          <Image style={LoginStyles.backIcon} source={require('./assets/icons8-left-arrow-100.png') } />
        </TouchableHighlight>
        <Text style={LoginStyles.textStyle}>Login</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => { dismissKeyboard(); setPassFocus(false) }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === !'ios' ? 'height' : 'none'}
          style={LoginStyles.front}
        >
          <Animated.View style={[LoginStyles.inputView, inputStyle]}>
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
                onFocus={handleFocus}
                onBlur={handleBlur}
                secureTextEntry={true}
              />
            </InsetShadow>
            <TouchableHighlight style={LoginStyles.button} onPress={() => {
              checkLogin();
              navigation.navigate('MainView');
            }}>
              <Text style={LoginStyles.buttonText}>Submit</Text>
            </TouchableHighlight>
          </Animated.View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Text style={LoginStyles.brand}>ALPACA © 2024</Text>
    </SafeAreaView>
  );

  function checkLogin() {
    // Fetch the backend API to check the login credentials
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  }
};

export default Login;
