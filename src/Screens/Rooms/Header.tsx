import { View } from "native-base";
import { ReactElement } from "react";
import PropTypes from 'prop-types';
import { Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { stylesRooms } from "@Assets/screens/rooms";
import { InputText } from '@Components/form';
import UserMenu from '@Components/UserMenu';

import {headerProps} from './types/headerType';

export default function Header({setFilteredChats, chats} : headerProps) : ReactElement<headerProps>{
  const handleFilterChats = (text : string | undefined) => {
    if(text){
      const filteredChats = chats.filter((chat) => chat.roomName.toLowerCase().includes(text.toLowerCase()));
      setFilteredChats(filteredChats)
      return;
    };
    setFilteredChats(chats);
  };

  return <View style={stylesRooms.headerContainer}>
    <View>
      <UserMenu />
    </View>
    <View style={stylesRooms.headerInputContainer}>
      <InputText
        style={stylesRooms.headerInput}
        variant="rounded"
        placeholder="Search..."
        onChangeText={handleFilterChats}
        onSubmitEditing={()=> Keyboard.dismiss()}
        InputLeftElement={<Icon name="search" color="black" style={stylesRooms.headerLeftInput} size={15} />}
      />
    </View>
  </View>
};

Header.propTypes = {
  setChats: PropTypes.func,
}