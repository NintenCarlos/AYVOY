import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './components/Login'; // Asegúrate de que el componente LoginPage esté bien importado
import RecoverPassword from './components/RecoverPassword'; // Asegúrate de que el componente esté bien importado
import Home from './components/Home'; // Asegúrate de que el componente Home esté bien importado
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}} // Puedes cambiar esto según necesites
        />
        <Stack.Screen
          name="Recover-Password"
          component={RecoverPassword}
          options={{headerShown: false}} // Puedes cambiar esto según necesites
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}} // Puedes cambiar esto según necesites
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
