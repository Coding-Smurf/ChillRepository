import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050505',
        paddingTop: 10,
    },
    textStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        textShadowColor: '#fff',
        textShadowRadius: 15,
        fontFamily: 'lexend-extra-light',
    },
    textStyleBold: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        textShadowColor: '#fff',
        textShadowRadius: 15,
        fontFamily: 'lexend-bold',
    },
    textWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '20em',
    },
    front: {
        height: '85%',
        borderTopStartRadius: 100,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },
    version: {
        color: '#aaa',
        alignSelf: 'flex-end',
        paddingRight: 30,
        paddingTop: 50,
        position: 'absolute',
        fontFamily: 'lexend-light',
    },
    labelInput: {
        color: '#000',
        fontFamily: 'lexend-bold', // esto hay que cambiarlo a la fuente correcta, que seria Inter-bold.
        marginBottom: 10,
    },
    inputView: {
        marginTop: 225,
        width: '70%',
        justifyContent: 'center',
        verticalAlign: 'center',
    },
    textInput: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
        textAlign: 'left',
        fontFamily: 'lexend-light',
    },

});

export default LoginStyles;