import { StyleSheet } from 'react-native';

import { roomsStyle } from './roomsStyleTypes';

export const stylesRooms = StyleSheet.create<roomsStyle>({
  container: {
    flex: 1,
    backgroundColor: '#001F3F'
  },
  headerContainer: {
    height: 130,
    paddingVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginHorizontal: 25
  },
  headerInputContainer: {
    width: 150,
    paddingTop: 5
  },
  headerLeftInput: {
    padding: 9,
    backgroundColor: 'white',
    height: '100%'
  },
  headerInput: {
    width: '100%',
    height: 35,
    backgroundColor: 'white'
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  bodyLeftContainer: {
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderRightWidth: 1,
    paddingLeft: 23,
    height: '100%',
    width: 50
  },
  bodyRightContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
    paddingHorizontal: 20
  },
  bodyBadge: {
    borderRadius: 30,
    marginTop: 40,
    width: '90%',
    height: 60,
    marginHorizontal: 19,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  bodySubText: {
    fontSize: 10
  },
  roomDataContainer: {
    paddingLeft: 30
  }
});
