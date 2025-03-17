import {StyleSheet} from 'react-native';

export const NavbarStyle = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Alinea el contenido desde la parte superior
    alignItems: 'center',
  },

  toppingContainer: {
    position: 'absolute', // Posiciona el contenedor de manera absoluta
    top: 20, // Distancia desde la parte superior
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center', // Centra los elementos verticalmente
  },

  logo: {
    width: 150,
    height: 150,
  },

  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Separa los íconos al máximo
  },

  btnBellBars: {
    padding: 10,
    borderRadius: 10,
  },
});
