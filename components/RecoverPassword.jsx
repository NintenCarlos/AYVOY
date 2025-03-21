import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAt} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet} from 'react-native';

const RecoverPassword = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={FPStyle.container}>
      {/* */}
      <KeyboardAwareScrollView
        contentContainerStyle={FPStyle.contentContainer}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        extraHeight={100}
        extraScrollHeight={50}>
        {/* Logo */}
        <Image
          source={require('../components/images/AYVOY_logo.png')}
          style={FPStyle.logo}
          resizeMode="contain"
        />

        <Text style={FPStyle.title}>Recuperar Contraseña</Text>

        <Text style={FPStyle.text}>
          Ingresa tu correo electrónico. Te enviaremos un correo para que puedas
          recuperar tu contraseña.
        </Text>

        <View style={FPStyle.inputContainer}>
          <FontAwesomeIcon icon={faAt} size={22} color="#fe2fb5" />
          <TextInput
            style={FPStyle.input}
            placeholder="Correo Electrónico"
            placeholderTextColor="#444"
          />
        </View>

        <View>
          <TouchableOpacity style={FPStyle.buttonLogin} onPress={()=> navigation.navigate('Login')}>
            <Text style={FPStyle.buttonText}>Enviar Correo</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

export default RecoverPassword;


const FPStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252569',
  },

  contentContainer: {
    alignItems: 'center',
  },

  title: {
    top: 0,
    fontSize: 24,
    marginBottom: 20,
    color: '#01e5fd',
  },

  logo: {
    top: 50,
    height: 100,
    marginVertical: 100,
  },

  text: {
    color: '#fff',
    fontSize: 13,
    width: '83%',
    textAlign: 'center',
  },

  inputContainer: {
    top: 25,
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
    width: 200,
    top: 0,
    height: 50,
    backgroundColor: '#7950b6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

