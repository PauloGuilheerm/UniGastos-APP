import { StyleSheet, ViewStyle } from 'react-native';

interface createRoomStyle {
  container: ViewStyle;
  inputContainer: ViewStyle;
  iconContainer: ViewStyle;
  createRoomButton: ViewStyle;
  createButtonContainer: ViewStyle;
}

export const styleCreateRoom = StyleSheet.create<createRoomStyle>({
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
  createRoomButton: {
    backgroundColor: '#001F3F',
    width: 280,
    height: 50,
    borderRadius: 50,
    marginTop: 90
  },
  createButtonContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  }
});
