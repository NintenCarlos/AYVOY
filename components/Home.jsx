import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {HomeStyle} from './styles/HomeStyle';
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
