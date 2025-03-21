import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  faBars,
  faBell,
  faBusSimple,
  faHeadset,
  faLocationDot,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.contentContainer}>
        {/* Logo y botones de notificaciones/menú */}
        <View style={HomeStyle.toppingContainer}>
          <Image
            source={require('./images/AYVOY_logo.png')}
            style={HomeStyle.logo}
            resizeMode="contain"
          />
          <View style={HomeStyle.bellBarsContainer}>
            <TouchableOpacity style={HomeStyle.btnBellBars}>
              <FontAwesomeIcon icon={faBell} size={30} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={HomeStyle.btnBellBars}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <FontAwesomeIcon icon={faBars} size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Botones de ruta */}
        <TouchableOpacity
          style={HomeStyle.routeContainer}
          onPress={() => navigation.navigate('Schedule')}>
          <View style={HomeStyle.routeContent}>
            <FontAwesomeIcon icon={faBusSimple} size={90} color="#fff" />
            <View style={HomeStyle.routeTextContainer}>
              <Text style={HomeStyle.routeTitle}>Siguiente Ruta</Text>
              <View style={HomeStyle.routeDetails}>
                <Text style={HomeStyle.routeText}>Ruta 43</Text>
                <Text style={HomeStyle.routeText}>7:55 am</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Contenedor de puntos y chat */}
        <View style={HomeStyle.miniContainer}>
          <TouchableOpacity
            style={HomeStyle.pointsContainer}
            onPress={() => navigation.navigate('Points')}>
            <Text style={HomeStyle.miniTitle}>Puntos:</Text>
            <Text style={HomeStyle.points}>45</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={HomeStyle.chatContainer}
            onPress={() => navigation.navigate('Chat')}>
            <Text style={HomeStyle.miniTitle}>Chat</Text>
            <FontAwesomeIcon icon={faMessage} size={60} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Botón del mapa de rutas */}
        <TouchableOpacity
          style={HomeStyle.mapContainer}
          onPress={() => navigation.navigate('MapRoute')}>
          <View style={HomeStyle.mapContent}>
            <FontAwesomeIcon icon={faLocationDot} size={70} color="#fff" />
            <Text style={HomeStyle.mapTitle}>Mapa de Rutas</Text>
          </View>
        </TouchableOpacity>

        {/* Botón de soporte técnico */}
        <TouchableOpacity
          style={HomeStyle.supportContainer}
          onPress={() => navigation.navigate('Support')}>
          <View style={HomeStyle.supportContent}>
            <FontAwesomeIcon icon={faHeadset} size={30} color="#fff" />
            <Text style={HomeStyle.supportTitle}>Soporte Técnico</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252569',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },

  toppingContainer: {
    position: 'absolute',
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
  },

  bellBarsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  btnBellBars: {
    padding: 10,
    borderRadius: 10,
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
    backgroundColor: '#fff325',
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
