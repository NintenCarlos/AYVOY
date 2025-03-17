import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252569',
  },

  contentContainer: {
    alignItems: 'center',
  },

  logo: {
    height: 200,
    marginBottom: 20,
  },

  title: {
    top: -60,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#01e5fd',
  },

  inputContainer: {
    top: -25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 55,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    backgroundColor: '#cbd3d4',
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 5,
  },

  buttonLogin: {
    width: 230,
    top: -40,
    height: 50,
    backgroundColor: '#7950b6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 30,
  },

  buttonText: {
    color: '#fff', // Texto blanco
    fontSize: 18,
    fontWeight: 'bold',
  },

  forgetPasswordText: {
    top: -45,
    color: '#cbd3d4',
  },
});
