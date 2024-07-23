import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface loadingOverlayStyle {
  overlay: ViewStyle;
  container: ViewStyle;
  loadingText: TextStyle;
}

export const stylesLoadingOverlay = StyleSheet.create<loadingOverlayStyle>({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#fff',
  },
});
