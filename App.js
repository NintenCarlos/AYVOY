import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './components/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import RecoverPassword from './components/RecoverPassword';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
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
