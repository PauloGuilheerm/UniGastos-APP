import { ReactElement, useEffect, useState } from "react";
import { View, FlatList, Text, Menu as NBMenu, Toast } from "native-base";
import { Pressable, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { stylesRooms } from '@Assets/screens/rooms';
import HttpClient from '@Service/httpClient';
import useWebSocket from '@Hooks/useWebSocket';
import { useAppContext } from '@Context';
import { navigate } from '@Routes/navigationRef';

import { getToken } from '@Auth';

import EmptyChats from './EmptyChats';
import { bodyProps } from "./types/bodyTypes";
import { Chat } from "./types/roomsTypes";

export default function Body({ chats, setChats, setFilteredChats }: bodyProps): ReactElement<bodyProps> {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  const { setStompClient, setRoomData, userData, setLoading } = useAppContext();

  const { stompClient } = useWebSocket({
    chatId: selectedChat?.id ?? "",
    userToken: userData?.token ?? "",
    setRoomData
  });

  useEffect(() => {
    if (!stompClient) return;
    setStompClient(stompClient);
    navigate('Room', false);
  }, [stompClient]);

  const handleRoomEnter = async (roomid: string) => {
    setLoading(true);

    const chat = await HttpClient.get(`/chat/chatByRoomId?roomId=${roomid}`).then((res) => res.data.data);
    
    setSelectedChat(chat);
  };

  const handleRoomLeave = async (chatToDelete: Chat) => {
    setLoading(true);
    await HttpClient.post(`/chat/leave`, { chatId: chatToDelete.id, userId: userData?.id });

    setChats((prev: Chat[]) => prev.filter((chatToFilter) => chatToFilter.id !== chatToDelete.id));
    setFilteredChats((prev) => prev.filter((chat) => chat.id !== chatToDelete.id));

    setLoading(false);
  };

  return <View style={stylesRooms.bodyContainer}>
    <FlatList
      data={chats}
      keyExtractor={(config) => config.id}
      ListEmptyComponent={EmptyChats}
      renderItem={({ item }) => <TouchableOpacity onPress={() => handleRoomEnter(item.roomId)}>
        <View style={stylesRooms.bodyBadge}>
          <View style={stylesRooms.roomDataContainer}>
            <Text style={stylesRooms.bodyText}>
              {item?.roomName}
            </Text>
            <Text style={stylesRooms.bodySubText}>
              Mercado
            </Text>
          </View>
          <NBMenu width="100%" placement="bottom right" trigger={triggerProps => {
            return <Pressable accessibilityLabel="opções de chat" {...triggerProps}>
              <View style={stylesRooms.bodyRightContainer}>
                <Icon name="ellipsis-v" size={18} />
              </View>
            </Pressable>
          }}>
            <NBMenu.Item onPress={() => handleRoomEnter(item.roomId)}>Entrar</NBMenu.Item>
            <NBMenu.Item onPress={() => handleRoomLeave(item)}>Sair</NBMenu.Item>
          </NBMenu>
        </View>
      </TouchableOpacity>}
    />
  </View>
};

Body.propTypes = {
  chats: PropTypes.array,
  setChats: PropTypes.func,
  setFilteredChats: PropTypes.func,
}