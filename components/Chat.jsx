import {Image, Pressable, View,ScrollView, TouchableOpacity, TextInput, Text } from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet} from 'react-native';
import { useState } from 'react';

const Chat = () => {
  const navigation = useNavigation();

  const [text, setText] = useState("")
  const [message, setMessage] = useState([{
        id: 1,
        name: "Tu",
        camion: "Ruta 50",
        text: "Hola"
  }])

  const sendmessage = ()=>{
    if(text){
      const Addmessage= {
        id: message.length + 1,
        name: "Tu",
        camion: "Ruta 50",
        text: text
      }
      setMessage([...message, Addmessage])
      setText("")
    }
  }
  
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.toppingContainer}>
        <Image
          source={require('./images/AYVOY_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Pressable
          style={styles.menuButton}
          onPress={() => {
            console.log('Botón presionado'); // Depuración
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <FontAwesomeIcon icon={faBars} size={30} color="#fff" />
        </Pressable>
      </View>
      
      <Text style={styles.Title}>CHAT RUTA: 50</Text>
      <ScrollView style={styles.ChatContainer}>
       
          <Text style={styles.MessageContainer}>
            <Text style={styles.Name}>Camionero2</Text>
            <Text style={styles.Camion}>(1 Camion delante de ti): </Text>
            <Text style={styles.Text}>Hola </Text>
          </Text>

          <Text style={styles.MessageContainer}>
            <Text style={styles.Name}>Camionero1</Text>
            <Text style={styles.Camion}>(1 Camion detras de ti): </Text>
            <Text style={styles.Text}>Hola </Text>
          </Text>
          
          <Text style={styles.MessageContainer}>
            <Text style={styles.Name}>Juan</Text>
            <Text style={styles.Admin}>(Admin): </Text>
            <Text style={styles.Text}>Digan donde </Text>
          </Text>
          {
            message.map((m)=>(
          <TouchableOpacity
          onPress={() => navigation.navigate('ChatProfil', { user: m })}> 
            <Text style={styles.MessageContainer}>
              <Text style={styles.Name}>{m.name}</Text>
              <Text style={styles.Camion}>({m.camion}): </Text>
              <Text style={styles.Text}>{m.text} </Text>
            </Text>
          </TouchableOpacity>
            ))
          }
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput value={text} onChangeText={(text) => setText(text)} style={styles.Input} placeholder='Escribir Mensaje'></TextInput>
          <TouchableOpacity style={styles.SendButton} onPress={sendmessage}>
            <Text>Enviar</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
};

export default Chat;

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
   
  Header:{
    flexDirection: "row",
    padding: 10
  },
  Title:{
    color: "#01e5fd",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  BackButton: {
    width: "10%",
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  ChatContainer:{
    borderRadius: 10,
    backgroundColor: "#252569",
    padding: 10,
    marginBottom: 10
  },
  MessageContainer:{
    fontSize: 20,
    padding: 7,
    marginVertical: 5,
    borderWidth: 1,
    backgroundColor: "#252599",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignSelf: "flex-start",
  },
  Name:{
    color: "#ca2193"
  },
  Camion:{
    color: "#e55a14"
  },
  Text: {
    color: "white",
  },
  Admin:{
    color: "#d4e300"
  },
  
  inputContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius:50,
    padding: 5,
    marginBottom: 2
  },
  Input:{
    borderRadius: 100,
    backgroundColor: "white",
    width: "70%",
    fontSize: 15
  },
  SendButton:{
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: "white",
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "20%"
  },
});
