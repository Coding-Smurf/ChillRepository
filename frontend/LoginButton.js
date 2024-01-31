import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';


const LoginButton = ({ displayText, IconURI }) => {
    
    const [loaded] = useFonts({
        'lexend': require('./assets/Fonts/Lexend/static/Lexend-Light.ttf'),

    });
    
    if (!loaded) {
        return null;
    }
        
    console.log(IconURI);

    return (
        <TouchableHighlight underlayColor='rgba(20,20,20,0.25)' style={styles.buttonContainer} onPress={() => alert('Login Button pressed')}>
            <View style={styles.textWrapper} >
                <Text style={styles.button}>{displayText}</Text>
                <Image style={styles.iconStyle} source={require('./assets/icons8-add-user-male-100.png')} />
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 15,
        borderWidth: 0.9,
        borderColor: '#ccc',
        padding: 10,
        //Its for IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .3,

        // its for android 
        elevation: 5,
        position: 'relative',

        width: '65%',
        alignContent: 'center',
        marginTop: 50,
        backgroundColor: '#fff',
    },
    button: {
        paddingLeft: 40,
        padding: 20,
        fontSize: 30,
        fontWeight: 100,
        fontFamily: 'lexend',
    },
    textWrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconStyle: {
        right: 10,
        top: 0,
        height: 40,
        width: 40 
    }
});

export default LoginButton;