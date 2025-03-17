import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login';
import RecoverPassword from './components/RecoverPassword';
import { DrawerNavigator } from './components/Drawer';

// Crea el Stack Navigator
const Stack = createNativeStackNavigator();

// Componente principal
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Pantallas sin Drawer */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recover-Password"
          component={RecoverPassword}
          options={{headerShown: false}}
        />

        {/* Pantalla con Drawer */}
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
