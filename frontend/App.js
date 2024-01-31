import { Text, StyleSheet, View, Image, SafeAreaView, Button } from 'react-native';
import styles from './styles.js';
import LoginButton from './LoginButton';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    'lexend-light': require('./assets/Fonts/Lexend/static/Lexend-Light.ttf'),
    'lexend-bold': require('./assets/Fonts/Lexend/static/Lexend-Bold.ttf'),
    'lexend-extra-light': require('./assets/Fonts/Lexend/static/Lexend-ExtraLight.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style = {styles.textWrapper}>
        <Text style={styles.textStyle}>Welcome to </Text>
        <Text style={styles.textStyleBold}>ALPACA! </Text>
      </View>
      <View style={styles.front}>
        <LoginButton displayText="Login" IconURI="./assets/icons8-login-100.png" />
        <LoginButton displayText="Register" IconURI="./assets/icons8-add-user-male-100.png" />
      </View>
    </SafeAreaView>
  );``
}
