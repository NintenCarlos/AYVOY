// styles/DrawerStyle.js
import {StyleSheet} from 'react-native';

export const DrawerStyle = StyleSheet.create({
  drawer: {
    backgroundColor: '#121534', // Color de fondo del Drawer
    width: '70%',
  },
  label: {
    color: '#d4c6ff', // Color del texto de los elementos del Drawer
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    tintColor: 'white', // Color de los íconos en el Drawer
  },

  activeColor: {
    color: '#d4c6ff', // Color del texto cuando está seleccionado
  },

  inactiveColor: {
    color: '#d4c6ff', // Color del texto cuando NO está seleccionado
  },

  activeBackgroundColor: {
    backgroundColor: '#fff', // Fondo del item seleccionado
  },
});


// Colores que voy a usar
// #121534
// #919191
// #d4c6ff
// #ffffff
// #1D204D
