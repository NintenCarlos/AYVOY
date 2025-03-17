import {Image, Pressable, View} from 'react-native';
import { SupportStyle } from './styles/SupportStyle';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Support = () => {
  const navigation = useNavigation();
          return (
            <View style={SupportStyle.container}>
              {/* Navbar */}
              <View style={SupportStyle.toppingContainer}>
                <Image
                  source={require('./images/AYVOY_logo.png')}
                  style={SupportStyle.logo}
                  resizeMode="contain"
                />
                <Pressable
                  style={SupportStyle.menuButton}
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

export default Support;
