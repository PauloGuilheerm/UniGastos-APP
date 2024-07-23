import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface roomStyle {
  container: ViewStyle;
  header: ViewStyle;
  iconContainer: ViewStyle;
  textRoomName: TextStyle;
  textRoomType: TextStyle;
  badgeView: ViewStyle;
  badgeIcon: TextStyle;
  textRoomId: TextStyle;
  icon: ViewStyle;
  roomStatistics: ViewStyle;
  textRoomStatistics: TextStyle;
  subTextRoomStatistics: TextStyle;
}

export const stylesRoom = StyleSheet.create<roomStyle>({
  container: {
    backgroundColor: '#001F3F'
  },
  header: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    marginRight: 25
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
    marginRight: 30
  },
  textRoomName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    maxWidth: 80,
  },
  textRoomType: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  badgeView: {
    flexDirection: 'row',
    gap: 8
  },
  badgeIcon: {
    marginTop: 3,
    color: 'white'
  },
  textRoomId: {
    fontSize: 11,
    color: 'white'
  },
  icon: {
    paddingLeft: 25,
  },
  roomStatistics: {
    height: 70,
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderTopColor: 'white',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 27,
  },
  textRoomStatistics: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  subTextRoomStatistics: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white'
  },
});
