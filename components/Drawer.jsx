import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCalendarDay,
  faCoins,
  faComments,
  faHeadset,
  faHouse,
  faMapMarkedAlt,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { DrawerStyle } from './styles/DrawerStyle';
import Home from './Home';
import Profile from './Profile';
import Schedule from './Schedule';
import Points from './Points';
import Chat from './Chat';
import MapRoutes from './MapRoutes';
import Support from './Support';
import Login from './Login'; // Usamos el mismo componente Login

const Drawer = createDrawerNavigator();

// 🔹 Lista de pantallas con su icono y configuración
const screens = [
  { name: 'Home', component: Home, label: 'Inicio', icon: faHouse },
  { name: 'Profile', component: Profile, label: 'Perfil', icon: faUser },
  {
    name: 'Schedule',
    component: Schedule,
    label: 'Horario',
    icon: faCalendarDay,
  },
  {
    name: 'Points',
    component: Points,
    label: 'Puntos y Recompensas',
    icon: faCoins,
  },
  {
    name: 'MapRoute',
    component: MapRoutes,
    label: 'Mapa de Rutas',
    icon: faMapMarkedAlt,
  },
  { name: 'Chat', component: Chat, label: 'Chat', icon: faComments },
  {
    name: 'Support',
    component: Support,
    label: 'Soporte Técnico',
    icon: faHeadset,
  },
  {
    name: 'Logout',
    component: Login, // Usamos el mismo componente Login
    label: 'Cerrar Sesión',
    icon: faRightFromBracket,
  },
];

// 🔹 DrawerNavigator optimizado
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: DrawerStyle.drawer,
        drawerLabelStyle: DrawerStyle.label,
        drawerActiveTintColor: DrawerStyle.activeColor,
        drawerInactiveTintColor: DrawerStyle.inactiveColor,
        drawerActiveBackgroundColor: '#1D204D',
      }}>
      {screens.map(({ name, component, label, icon }) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={component}
          options={{
            drawerLabel: label,
            drawerIcon: () => (
              <FontAwesomeIcon icon={icon} size={20} color={'#d4c6ff'} />
            ),
            headerShown: false,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
