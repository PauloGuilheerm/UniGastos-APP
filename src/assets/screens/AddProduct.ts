import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface addProductStyle {
  container: ViewStyle;
  button: TextStyle;
}

export const stylesAddProduct = StyleSheet.create<addProductStyle>({
  container: {
    backgroundColor: 'white',
    height: '100%'
  },
  button: {
    padding: 10,
    width: '80%',
    fontSize: 50,
  },
});
