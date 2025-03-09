import React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import LoginStyle from './styles/LoginStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleUser, faLock} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <ScrollView
      style={LoginStyle.container}
      contentContainerStyle={LoginStyle.contentContainer}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag">
      {/* Logo */}
      <Image
        source={require('./images/AYVOY_logo.png')}
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
          onPress={() => Alert.alert('Lefo??')}>
          <Text style={LoginStyle.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default App;
