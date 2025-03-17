import {StyleSheet} from 'react-native';

export const ProfileStyle = StyleSheet.create({
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
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#01e5fd',
    marginBottom: 20,
  },

  personalInfo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#009BB0',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: 25,
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
    shadowOffset: {width: 0, height: 2},
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
});
