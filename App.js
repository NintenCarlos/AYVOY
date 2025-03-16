import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './components/Login';
import Home from './components/Home';
import RecoverPassword from './components/RecoverPassword';
import Profile from './components/Drawer';

// Crea el Stack Navigator
const Stack = createNativeStackNavigator();

// Crea el Drawer Navigator
const Drawer = createDrawerNavigator();

// Define el Drawer Navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

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
          name="Main"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
