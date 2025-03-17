import {StyleSheet} from 'react-native';

export const ScheduleStyle = StyleSheet.create({
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
