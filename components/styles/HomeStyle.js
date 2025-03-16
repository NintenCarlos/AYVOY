import {StyleSheet} from 'react-native';

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121534',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Alinea el contenido desde la parte superior
    alignItems: 'center',
    paddingTop: 100, // Espacio para el logo
  },
  logo: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 150,
    height: 150,
  },
  routeContainer: {
    marginTop: 40,
    width: '90%',
    padding: 20,
    backgroundColor: '#ca2193',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  routeTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  routeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  routeTextContainer: {
    marginLeft: 15,
    flex: 1,
  },

  routeDetails: {
    marginTop: 5,
  },

  routeText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },

  miniContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },

  miniTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },

  points: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
  },

  pointsContainer: {
    marginTop: 40,
    width: '45%',
    padding: 20,
    height: 150,
    backgroundColor: '#784fba',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  chatContainer: {
    marginTop: 40,
    width: '45%',
    padding: 20,
    height: 150,
    backgroundColor: '#e55a14',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapContainer: {
    marginTop: 40,
    width: '90%',
    padding: 20,
    height: 200,
    backgroundColor: '#d4e300',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  mapTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  supportContainer: {
    marginTop: 40,
    width: '90%',
    height: 100,
    padding: 20,
    backgroundColor: '#0dc8e2',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  supportContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  supportTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
