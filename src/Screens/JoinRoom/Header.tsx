import { Text, View } from "native-base";
import { ReactElement } from "react";

import { styleJoinRoomHeader } from '@Assets/screens/joinRoom/header'
export default function JoinRoomHeader() : ReactElement {
  return <View style={styleJoinRoomHeader.container}>
    <Text style={styleJoinRoomHeader.text}>
      Entrar em uma sala
    </Text>
  </View>
}