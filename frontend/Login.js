import React from 'react';
import { Text, SafeAreaView, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import LoginStyles from './LoginStyles';
import InsetShadow from "react-native-inset-shadow";

const Login = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passFocus, setPassFocus] = useState(false);

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };
    
    return (
        <SafeAreaView style={LoginStyles.container}>
            <Text style={LoginStyles.textStyle}>Login</Text>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View style={LoginStyles.front}>
                    <View style={passFocus ? LoginStyles.inputViewFocus : LoginStyles.inputView}>
                        <Text style={LoginStyles.labelInput}>Username</Text>
                        <InsetShadow containerStyle={LoginStyles.innerShadow} shadowRadius={4} shadowOpacity={0.4}>
                            <TextInput
                                style={LoginStyles.textInput}
                                onChangeText={text => setUsername(text)}
                                value={username}
                            />
                        </InsetShadow>
                        <Text style={LoginStyles.labelInput}>Password</Text>
                        <InsetShadow containerStyle={LoginStyles.innerShadow} shadowRadius={4} shadowOpacity={0.4}>
                            <TextInput
                                style={LoginStyles.textInput}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                onFocus={() => setPassFocus(true)}
                                onBlur={() => setPassFocus(false)}
                                secureTextEntry={true}  
                            />
                        </InsetShadow>
                        <TouchableHighlight style={LoginStyles.button} onPress={() => navigation.navigate('MainView')}> 
                            <Text style={LoginStyles.buttonText}>Submit</Text>
                        </TouchableHighlight>
                    </View>
                    <Text style={LoginStyles.brand}>ALPACA © 2024</Text>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default Login;
