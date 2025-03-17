import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from './Profile';
import Home from './Home';
import {DrawerStyle} from './styles/DrawerStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendarDay,
  faCoins,
  faComments,
  faHeadset,
  faHouse,
  faMapMarkedAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Schedule from './Schedule';
import Points from './Points';
import Chat from './Chat';
import MapRoutes from './MapRoutes';
import Support from './Support';

const Drawer = createDrawerNavigator();

const HauseIcon = () => {
  return <FontAwesomeIcon icon={faHouse} size={20} color={'#d4c6ff'} />;
};

const ProfileIcon = () => {
  return <FontAwesomeIcon icon={faUser} size={20} color={'#d4c6ff'} />;
};

const ScheduleIcon = () => {
  return <FontAwesomeIcon icon={faCalendarDay} size={20} color={'#d4c6ff'} />;
};

const PointsIcon = () => {
  return <FontAwesomeIcon icon={faCoins} size={20} color={'#d4c6ff'} />;
};

const ChatIcon = () => {
  return <FontAwesomeIcon icon={faComments} size={20} color={'#d4c6ff'} />;
};

const MapRouteIcon = () => {
  return <FontAwesomeIcon icon={faMapMarkedAlt} size={20} color={'#d4c6ff'} />;
};

const SupportIcon = () => {
  return <FontAwesomeIcon icon={faHeadset} size={20} color={'#d4c6ff'} />;
};

// Define el Drawer Navigator
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: DrawerStyle.drawer, // Aplica estilos al Drawer
        drawerLabelStyle: DrawerStyle.label, // Aplica estilos al texto de los items
        drawerActiveTintColor: DrawerStyle.activeColor, // Color del texto cuando está seleccionad
        drawerInactiveTintColor: DrawerStyle.inactiveColor, // Color del texto cuando NO está seleccionado
        drawerActiveBackgroundColor: '#1D204D', // Fondo del item seleccionado
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: HauseIcon,
          drawerLabel: 'Inicio',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ProfileIcon,
          drawerLabel: 'Perfil',
        }}
      />

      {/* Horario */}
      <Drawer.Screen
        name="Schedule"
        component={Schedule}
        options={{
          drawerIcon: ScheduleIcon,
          drawerLabel: 'Horario',
        }}
      />

      <Drawer.Screen
        name="Points"
        component={Points}
        options={{
          drawerIcon: PointsIcon,
          drawerLabel: 'Puntos y Recompensas',
        }}
      />

      <Drawer.Screen
        name="MapRoute"
        component={MapRoutes}
        options={{drawerIcon: MapRouteIcon, drawerLabel: 'Mapa de Rutas'}}
      />

      <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{drawerIcon: ChatIcon, drawerLabel: 'Chat'}}
      />

      <Drawer.Screen
        name="Support"
        component={Support}
        options={{drawerIcon: SupportIcon, drawerLabel: 'Soporte Técnico'}}
      />
    </Drawer.Navigator>
  );
};
