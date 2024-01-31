import { StyleSheet } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#050505',
    },
    textStyle: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 10,
      textShadowColor: '#fff',
      textShadowRadius: 15,
     fontFamily: 'lexend-extra-light',
    },
    textStyleBold: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 10,
      textShadowColor: '#fff',
      textShadowRadius: 15,
      fontFamily: 'lexend-bold',
    },
    textWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    logo: {
      height: 180,
      width: 180,
      alignSelf: 'center',
      marginBottom: 25,
    },
    front: {
      height: '70%',
      borderTopStartRadius: 250,
      backgroundColor: '#fff',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      alignContent: 'center',
      alignItems: 'center',
      paddingTop: 100,
    }
  });

export default styles;