import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface googleAuthStyle {
  googleButton: ViewStyle;
  googleIcon: TextStyle;
  googleText: TextStyle;
}

export const stylesGoogleAuth = StyleSheet.create<googleAuthStyle>({
  googleButton: {
    width: '80%',
    backgroundColor: '#4285f4',
    borderRadius: 10,
    height: 74,
    marginBottom: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  googleIcon: {  
    color: '#ffffff',
    padding: 10,
  },
  googleText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 19.99,
    lineHeight: 23.43,
    fontFamily: 'Roboto'
  }
});
