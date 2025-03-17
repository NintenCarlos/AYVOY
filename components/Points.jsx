import {Image, Pressable, Text, View} from 'react-native';
import { PointsStyle } from './styles/PointsStyle';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Points = () => {
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
          </View>
        );
};

export default Points;
