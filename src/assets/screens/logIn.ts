import { StyleSheet, ViewStyle } from 'react-native';

interface loginStyle {
  container: ViewStyle;
}

export const styleLogin = StyleSheet.create<loginStyle>({
  container: {
    backgroundColor: '#e2e4ea',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
