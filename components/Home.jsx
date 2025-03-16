import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HomeStyle} from './styles/HomeStyle';
import {
  faBusSimple,
  faHeadset,
  faLocationDot,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Home = () => {
  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.contentContainer}>
        {/* Logo */}
        <Image
          style={HomeStyle.logo}
          source={require('./images/AYVOY_logo.png')}
          resizeMode="contain"
        />

        {/* Botones de ruta */}
        <TouchableOpacity style={HomeStyle.routeContainer}>
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

        <View style={HomeStyle.miniContainer}>
          <TouchableOpacity style={HomeStyle.pointsContainer}>
            <Text style={HomeStyle.miniTitle}>Puntos:</Text>
            <Text style={HomeStyle.points} >45</Text>
          </TouchableOpacity>

          <TouchableOpacity style={HomeStyle.chatContainer}>
            <Text style={HomeStyle.miniTitle}>Chat</Text>
            <FontAwesomeIcon icon={faMessage} size={60} color="#fff" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={HomeStyle.mapContainer}>
          <View style={HomeStyle.mapContent}>
            <FontAwesomeIcon icon={faLocationDot} size={70} color="#fff" />
            <Text style={HomeStyle.mapTitle}>Mapa de Rutas</Text>
          </View>
          <ImageBackground source={require('./images/images.jpeg')} />
        </TouchableOpacity>

        <TouchableOpacity style={HomeStyle.supportContainer}>
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
