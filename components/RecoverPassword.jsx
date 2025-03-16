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
import FPStyle from './styles/FPStyle';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAt} from '@fortawesome/free-solid-svg-icons';

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
