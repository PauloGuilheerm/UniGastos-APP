import { useState, useEffect } from "react";
import { View } from "native-base";
import { useAppContext } from '../../context';
import HttpClient from "../../service/httpClient";
import { stylesRooms } from "../../assets/screens/rooms";

import { Chat } from './types/roomsTypes';
import Header from './Header';
import Body from './Body';

export default function Rooms() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [filteredChats, setFilteredChats] = useState<Chat[]>([]);

  const { userData, update, setLoading } = useAppContext();

  useEffect(() => {
    if (!userData?.id) return;
    const fetchChats = async () => {
      setLoading(true);
      const data : Chat[] = await HttpClient.get(`/chat/chatsByIdUser?userId=${userData.id}`).then((res) => res.data.data);
      setChats(data);
      setFilteredChats(data);
      setLoading(false);
    };
    fetchChats();
  }, [userData?.id, update]);

  return <View style={stylesRooms.container}>
    <Header setFilteredChats={setFilteredChats} chats={chats} />
    <Body
      chats={filteredChats}
      setChats={setChats}
      setFilteredChats={setFilteredChats}
    />
  </View>
}