import { StyleSheet } from "react-native";
import { joinRoomStyle } from './joinRoomStyle';

export const styleJoinRoom = StyleSheet.create<joinRoomStyle>({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center'
  },
  joinRoomButton: {
    backgroundColor: '#001F3F',
    width: 280,
    height: 50,
    borderRadius: 50,
    marginTop: 90
  },
  joinButtonContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  }
});
