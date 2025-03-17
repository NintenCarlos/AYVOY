import {StyleSheet} from 'react-native';

export const DrawerStyle = StyleSheet.create({
  drawer: {
    backgroundColor: '#10132E', // Color de fondo del Drawer
    width: '70%',
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
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
  logoutButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 20, // Espacio en la parte inferior
  },
  logoutText: {
    color: '#d9534f', // Color rojo para el texto de "Cerrar sesión"
    fontSize: 16,
    marginLeft: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Color del divisor
    marginVertical: 10, // Espacio alrededor del divisor
  },
});
