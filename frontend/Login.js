
import { Text, SafeAreaView, View, TouchableHighlight, TextInput } from 'react-native';
import { useState } from 'react';
import LoginStyles from './LoginStyles';

const Login = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <SafeAreaView style={LoginStyles.container}>
            <View style={LoginStyles.front}>
                <View style={LoginStyles.inputView}>
                    <Text style={LoginStyles.labelInput}>username</Text>
                    <TextInput
                        style={LoginStyles.textInput}
                        onChangeText={text => setUsername(text)}
                        value={username}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
}

export default Login;