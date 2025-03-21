import {StyleSheet} from 'react-native';

export const PointsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252569',
  },
  contentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  toppingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  menuButton: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#01e5fd',
    marginBottom: 10,
    alignSelf: 'flex-start', // Alinea el título a la izquierda
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20, // Espacio entre el contenido y las pestañas
  },
  totalPoints: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 15,
    fontSize: 42,
  },
  infoBtn: {
    width: 180,
    height: 60,
    backgroundColor: '#7950b6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  tabs: {
    flex: 1, // Ocupa el espacio restante
    width: '100%',
  },
});
