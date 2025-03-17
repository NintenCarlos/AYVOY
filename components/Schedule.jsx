import {Image, Pressable, Text, View} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { ScheduleStyle } from './styles/ScheduleStyle';

const Schedule = () => {
  const navigation = useNavigation();
  return (
    <View style={ScheduleStyle.container}>
      {/* Navbar */}
      <View style={ScheduleStyle.toppingContainer}>
        <Image
          source={require('./images/AYVOY_logo.png')}
          style={ScheduleStyle.logo}
          resizeMode="contain"
        />
        <Pressable
          style={ScheduleStyle.menuButton}
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

export default Schedule;
