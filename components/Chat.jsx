import {Image, Pressable, Text, View} from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ChatStyle } from './styles/ChatStyle';

const Chat = () => {
    const navigation = useNavigation();
      return (
        <View style={ChatStyle.container}>
          {/* Navbar */}
          <View style={ChatStyle.toppingContainer}>
            <Image
              source={require('./images/AYVOY_logo.png')}
              style={ChatStyle.logo}
              resizeMode="contain"
            />
            <Pressable
              style={ChatStyle.menuButton}
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

export default Chat;
