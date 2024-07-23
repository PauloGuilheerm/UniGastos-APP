import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface userConfigStyle {
  header: ViewStyle;
  container: ViewStyle;
  avatar: ViewStyle;
  avatarText: TextStyle;
  inputContainer: ViewStyle;
  saveButton: ViewStyle;
  saveButtonText: TextStyle;
  saveButtonContainer: ViewStyle;
}

export const stylesUserConfigs = StyleSheet.create<userConfigStyle>({
  header: {
    height: 60,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingTop: 30
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  avatar: {
    backgroundColor: '#34495E',
    height: 250,
    width: 250,
  },
  avatarText: {
    fontSize: 200,
    color: 'white'
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#001F3F',
    width: 230,
    borderRadius: 50,
    height: 50,
  },
  saveButtonText: {
    fontSize: 20,
    color: 'white',
  },
  saveButtonContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 120
  }
});
