import { StyleSheet } from 'react-native';

import { ChatMessageStyle } from './chatMessageTypes';

export const stylesChatMessage = StyleSheet.create<ChatMessageStyle>({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333'
  },
  totalContainer: {
    width: '50%',
    justifyContent: 'center',
    borderTopColor: 'black',
    borderTopWidth: 0.3,
    borderRightColor: 'black',
    borderRightWidth: 0.3,
    borderBottomColor: 'black',
    borderBottomWidth: 0.3
  },
  spendContainer: {
    width: '50%',
    justifyContent: 'center',
    borderTopColor: 'black',
    borderTopWidth: 0.3,
    borderBottomColor: 'black',
    borderBottomWidth: 0.3
  },
  text: {
    color: 'white'
  },
  chatInputSend: {
    alignItems: 'center',
    height: 50,
    width: 40
  },
  chatEmpty: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    backgroundColor: 'black',
    transform: [{ rotate: '0deg' }],
    height: '100%'
  },
  chatEmptyText: {
    transform: [{ rotate: '100deg' }]
  }
});