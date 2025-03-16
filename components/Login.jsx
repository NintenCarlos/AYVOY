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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginStyle from './styles/LoginStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleUser, faLock} from '@fortawesome/free-solid-svg-icons';

const Login = ({navigation}) => {
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
          <TouchableOpacity
            style={LoginStyle.buttonLogin}
            onPress={() => navigation.navigate('Home')}>
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
