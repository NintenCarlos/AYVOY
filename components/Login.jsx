import React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleUser, faLock} from '@fortawesome/free-solid-svg-icons';

const Login = ({navigation}) => {
  const goToHome = () => {
    // Redirige al usuario a la pantalla Main
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={LoginStyle.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={LoginStyle.contentContainer}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        extraHeight={100}
        extraScrollHeight={50}>
        {/* Logo */}
        <Image
          source={require('../components/images/AYVOY_logo.png')}
          style={LoginStyle.logo}
          resizeMode="contain"
        />

        <Text style={LoginStyle.title}>¡Bienvenido!</Text>

        {/* Correo */}
        <View style={LoginStyle.inputContainer}>
          <FontAwesomeIcon icon={faCircleUser} size={22} color="#fe2fb5" />
          <TextInput
            style={LoginStyle.input}
            placeholder="Correo Electrónico"
            placeholderTextColor="#444"
          />
        </View>

        {/* Contraseña */}
        <View style={LoginStyle.inputContainer}>
          <FontAwesomeIcon icon={faLock} size={22} color="#fe2fb5" />
          <TextInput
            secureTextEntry={true}
            style={LoginStyle.input}
            placeholder="Contraseña"
            placeholderTextColor="#444"
          />
        </View>

        <View>
          <TouchableOpacity style={LoginStyle.buttonLogin} onPress={goToHome}>
            <Text style={LoginStyle.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Recover-Password')}>
            <Text style={LoginStyle.forgetPasswordText}>
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

import {StyleSheet} from 'react-native';

const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252569',
  },

  contentContainer: {
    alignItems: 'center',
  },

  logo: {
    height: 100,
    marginVertical: 100,
  },

  title: {
    top: -60,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#01e5fd',
  },

  inputContainer: {
    top: -25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 55,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    backgroundColor: '#cbd3d4',
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 5,
  },

  buttonLogin: {
    width: 230,
    top: -40,
    height: 50,
    backgroundColor: '#7950b6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 30,
  },

  buttonText: {
    color: '#fff', // Texto blanco
    fontSize: 18,
    fontWeight: 'bold',
  },

  forgetPasswordText: {
    top: -45,
    color: '#cbd3d4',
  },
});
