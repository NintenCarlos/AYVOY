import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121534',
  },

  contentContainer: {
    alignItems: 'center',
  },

  title: {
    top: 0,
    fontSize: 24,
    marginBottom: 20,
    color: '#01e5fd',
  },

  logo: {
    top: 50,
    height: 200,
  },

  text: {
    color: '#fff',
    fontSize: 13,
    width: '83%',
    textAlign: 'center',
  },

  inputContainer: {
    top: 25,
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
    width: 200,
    top: 0,
    height: 50,
    backgroundColor: '#7950b6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
