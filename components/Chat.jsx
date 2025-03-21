import {Image, Pressable, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet} from 'react-native';

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

const ChatStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252569',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
});
