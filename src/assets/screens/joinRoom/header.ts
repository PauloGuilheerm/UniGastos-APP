import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { joinRoomHeaderStyle } from './joinRoomStyle';

export const styleJoinRoomHeader = StyleSheet.create<joinRoomHeaderStyle>({
  container: {
    height: 150,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#001F3F',
    marginBottom: 70,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    height: 'auto',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  }
});
