import { StyleSheet } from 'react-native';

import { EmptyListStyle } from './ProductListTypes';

export const stylesEmptyList = StyleSheet.create<EmptyListStyle>({
   container: {
     flex: 7,
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection: 'row',
     gap: 6,
     marginTop: 20
   },
   emptyListText: {
     fontSize: 18,
     color: 'white',
   }
 });