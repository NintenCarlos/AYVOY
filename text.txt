import {Image, Pressable, View} from 'react-native';
import { RoutesStyle } from './styles/MapRoutesStyle';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const MapRoutes = () => {
  const navigation = useNavigation();
        return (
          <View style={RoutesStyle.container}>
            {/* Navbar */}
            <View style={RoutesStyle.toppingContainer}>
              <Image
                source={require('./images/AYVOY_logo.png')}
                style={RoutesStyle.logo}
                resizeMode="contain"
              />
              <Pressable
                style={RoutesStyle.menuButton}
                onPress={() => {
                  console.log('Botón presionado'); // Depuración
                  navigation.dispatch(DrawerActions.toggleDrawer());
                }}>
                <FontAwesomeIcon icon={faBars} size={30} color="#fff" />
              </Pressable>
            </View>
          </View>
        );
};

export default MapRoutes;
