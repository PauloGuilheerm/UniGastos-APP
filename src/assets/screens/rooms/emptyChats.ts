import { StyleSheet } from 'react-native';

import { emptyChatsStyle } from './roomsStyleTypes';

export const stylesEmptyChats = StyleSheet.create <emptyChatsStyle> ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
    gap: 10
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});
