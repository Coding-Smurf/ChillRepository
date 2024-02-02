import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
    background: {
        backgroundColor: '#000',
        height: '100%',
    },
    loginContainer: {
        backgroundColor: '#070',
        height: '18%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    loginText: {
        fontSize: 30,
        color: '#FFF',
        width: '100%',
        textAlign: 'center',

    },
    backArrow: {
        width: 40,
        height: 40,
        position: 'absolute',
        left: 40,
    },
});

export default LoginStyles;