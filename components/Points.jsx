import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {PointsStyle} from './styles/PointsStyle';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {TabNavigator} from './Tabs';

const Points = () => {
  const points = 150;

  const navigation = useNavigation();
  return (
    <View style={PointsStyle.container}>
      {/* Navbar */}
      <View style={PointsStyle.toppingContainer}>
        <Image
          source={require('./images/AYVOY_logo.png')}
          style={PointsStyle.logo}
          resizeMode="contain"
        />
        <Pressable
          style={PointsStyle.menuButton}
          onPress={() => {
            console.log('Botón presionado'); // Depuración
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <FontAwesomeIcon icon={faBars} size={30} color="#fff" />
        </Pressable>
      </View>

      <View style={PointsStyle.contentContainer}>
        <Text style={PointsStyle.title}>Mis Puntos</Text>

        <View style={PointsStyle.infoContainer}>
          <View>
            <Text style={PointsStyle.totalPoints}>{points}</Text>
          </View>

          <TouchableOpacity style={PointsStyle.infoBtn}>
            <Text style={PointsStyle.buttonText}>
              ¿Cómo se obtienen los puntos?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={PointsStyle.tabs}>
        <TabNavigator />
      </View>
    </View>
  );
};

export default Points;
