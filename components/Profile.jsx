import React from 'react';
import {Text, View, ScrollView, Pressable, Image} from 'react-native'; // Corregir importación de Image
import {ProfileStyle} from './styles/ProfileStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

// Datos del perfil
const profileData = {
  name: 'Juan Carlos',
  lastName: 'Santoyo',
  email: 'charly@utma.edu.mx',
};

// Componente para renderizar tarjetas
const ProfileCard = ({value}) => (
  <View style={ProfileStyle.card}>
    <Text style={ProfileStyle.cardTitle}>{value}</Text>
  </View>
);

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={ProfileStyle.container}>
      {/* Navbar */}
      <View style={ProfileStyle.toppingContainer}>
        <Image
          source={require('./images/AYVOY_logo.png')}
          style={ProfileStyle.logo}
          resizeMode="contain"
        />
        <Pressable
          style={ProfileStyle.menuButton}
          onPress={() => {
            console.log('Botón presionado'); // Depuración
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <FontAwesomeIcon icon={faBars} size={30} color="#fff" />
        </Pressable>
      </View>

      {/* Contenido del perfil */}
      <ScrollView contentContainerStyle={ProfileStyle.contentContainer}>
        <Text style={ProfileStyle.title}>Mi Perfil</Text>
        <Image source={require('./images/IconUser.png')} style={ProfileStyle.userImg} />
        <Text style={ProfileStyle.personalInfo}>Información personal</Text>

        <Text style={ProfileStyle.subtitle}>Nombre:</Text>
        <ProfileCard label="Nombre" value={profileData.name} />

        <Text style={ProfileStyle.subtitle}>Apellido:</Text>
        <ProfileCard label="Apellido" value={profileData.lastName} />

        <Text style={ProfileStyle.subtitle}>Correo:</Text>
        <ProfileCard label="Correo" value={profileData.email} />

        <Text style={ProfileStyle.miniText} >Si necesita actualizar su correo electrónico o contraseña, por favor, comuníquese con el personal autorizado.</Text>
      </ScrollView>
    </View>
  );
};

export default Profile;
