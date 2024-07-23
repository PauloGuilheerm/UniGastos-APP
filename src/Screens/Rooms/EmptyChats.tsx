import { View, Text } from "native-base";
import { ReactElement } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {stylesEmptyChats} from '../../assets/screens/rooms/emptyChats';

export default function EmptyChats() : ReactElement {
    return <View style={stylesEmptyChats.container}>
        <Icon name='alert-circle-outline' size={20} color="white"/>
        <Text style={stylesEmptyChats.text}>Você não tem nenhuma sala.</Text>
    </View>
}