import { View, FlatList, Button } from 'native-base';
import { useEffect, ReactElement } from 'react';
import { SheetProvider, SheetManager } from 'react-native-actions-sheet';

import { useAppContext } from '@Context';
import { stylesProductList } from '@Assets/components/productList/productList';
import HttpClient from '@Service/httpClient';
import Room from '@Types/Room';
import { UserMessage } from '@Types/Message';
import Message from '@Types/Message';

import RegisterSheet from '../ActionSheet';
import EmptyList from './EmptyList';
import Costs from './Costs';
import SheetContent from './SheetContent';

export default function ProductListLayout() : ReactElement {
  return <SheetProvider>
    <ProductList />
  </SheetProvider>
};

function ProductList() : ReactElement {
  const { roomData, stompClient, setRoomData, loading, userData, update, setLoading} = useAppContext();

  useEffect(()=> {
    if(!update) return;
    (async () => {
      setLoading(true);

      const resp = await HttpClient.get(`/chat/chatById?chatId=${roomData?.id}`).then((res) => res.data.data);

      const formattedRoomData = new Room(resp.id, resp.roomId, resp.roomName, resp.costs, resp.participants, userData, resp?.messages);

      if (resp?.messages) {
        formattedRoomData.messages = roomData?.messages?.reverse().map((message: Message) => {
          const user = new UserMessage(message.userId, message.name);
          const createdAt = new Date(message.timestamp);

          const formattedMessage: Message = new Message(
            message.id,
            message.id,
            roomData?.id,
            createdAt,
            message.name,
            message.type === "JOIN" || message.type === "PRICE" || message.type === "LEAVE" || message.type === "SPEND",
            message.timestamp,
            message.type,
            message.userId,
            user,
            message.text,
            message.content,
          );

          return formattedMessage;
        });
      };

      console.log(formattedRoomData);

      setLoading(false);
      setRoomData(formattedRoomData)
    })();
  }, [update]);

  useEffect(() => {
    RegisterSheet({name: 'costSheet', sheet: SheetContent});
  }, [roomData?.costs]);

  useEffect(() => {
    roomData?.costs?.products?.forEach((item) => {
      RegisterSheet({name: item.id, sheet: () => <SheetContent  item={item} sheetId={item?.id} />})
    })
  }, [roomData?.costs]);

  useEffect(() => {
    return () => {
      setRoomData(undefined);
    }
  }, []);

  return <View flex={1} style={stylesProductList.container}>
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => item.id ?? ""}
        data={roomData?.costs?.products || []}
        renderItem={({item}) => <Costs item={item} stompClient={stompClient} chatId={roomData?.id ?? ""} />}
        ListEmptyComponent={(!loading && !roomData?.costs?.products?.length) ? <EmptyList /> : null}
      />
    </View>
    <Button
      style={stylesProductList.buttonAddProduct}
      onPress={() => SheetManager.show('costSheet')}
    >
      Adicionar produto
    </Button>
  </View>
};