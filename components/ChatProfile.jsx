import React from 'react';
import { Text, View, ScrollView, Pressable, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute} from '@react-navigation/native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ChatProfile = ({ route }) => {

  const navigation = useNavigation();
  const { user } = route.params; 

  return (
    <View style={styles.container}>

      <View style={styles.toppingContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={30} color="#fff" />
        </Pressable>
      </View>
      
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={require('./images/IconUser.png')} style={styles.userImg} />
        <Text style={styles.personalInfo}>Información del usuario</Text>

        <Text style={styles.subtitle}>Nombre:</Text>
        <Text style={styles.profileText}>{user.name}</Text>

        <Text style={styles.subtitle}>Ubicación:</Text>
        <Text style={styles.profileText}>{user.camion}</Text>

         <TouchableOpacity  >
              <Text style={styles.ReportButton}>Reportar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ChatProfile;

const styles = StyleSheet.create({
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
  userImg: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  backButton:{
    width: "10%"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#01e5fd',
    marginBottom: 20,
    alignContent: "center", 
  },
  personalInfo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#009BB0',
    alignSelf: 'center',
  
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    margin: 20,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#141433',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 25,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B9BAB3',
  },
  miniText: {
    width: '90%',
    alignSelf: 'flex-start',
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
    marginLeft: 25,
    marginBottom: 15,
  },
  profileText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
    
  },
  ReportButton:{
    backgroundColor: "#ca2193",
    borderRadius: 10,
    borderWidth: 1,
    color: "#ffffff",
    marginTop: 20,
    width: 100,
    height: 40,
    textAlign: "center",
    alignContent: "center",
    padding: 10
  }
});