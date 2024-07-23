import { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { REACT_APP_WS_URL } from '@env'

import HttpClient from '@Service/httpClient';

import useWebSocketProps, { useWebSocketReturn } from './useWebSocketTypes';
import Room from '@Types/Room';
import Message, { UserMessage } from '@Types/Message';
import { useAppContext } from '@Context';

import PropTypes from 'prop-types';

export default function UseWebSocket({ chatId, onMessageReceived, onAfterConnected, userToken, setRoomData, user }: useWebSocketProps): useWebSocketReturn {
  const [update, setUpdate] = useState<boolean>(false);
  const [stompClient, setStompClient] = useState<SockJS | null>(null);

  let innerStompClient : SockJS;
  const {updateWebSocket, setLoading} = useAppContext();


  const afterConnected = async (stompClient: SockJS) => {
      if(!chatId) return;
      stompClient.publish({
        destination: `/app/chat/${chatId}/joinChat`,
        body: JSON.stringify({
          chatId,
          userId: user?.id
        })
      });

      const resp = await HttpClient.get(`/chat/chatById?chatId=${chatId}`).then((res) => res.data.data);

      const roomData = new Room(resp.id, resp.roomId, resp.roomName, resp.costs, resp.participants, user, resp?.messages);

      if (resp?.messages) {
        roomData.messages = roomData?.messages?.reverse().map((message: Message) => {
          const user = new UserMessage(message.userId, message.name);
          const createdAt = new Date(message.timestamp);

          const formattedMessage: Message = new Message(
            message.id,
            message.id,
            chatId,
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

      setRoomData(roomData)
      setLoading(false);
  };

  const innerOnMessageReceived = (payload) => {
      const message = JSON.parse(payload);

      if (message.type === 'ERROR') return;

      if (message.type === 'COST') {
        setRoomData((prev: Room) => ({
          ...prev,
          costs: message
        }));
        return;
      };

      const isSystemMessage = message.type === "JOIN" || message.type === "PRICE" || message.type === 'SPEND' || message.type === "LEAVE";

      setRoomData((prev: Room) => ({
        ...prev,
        messages: GiftedChat.append(prev.messages ? prev.messages : [], {
          ...message,
          _id: message.id,
          text: message.content,
          createdAt: new Date(message.timestamp),
          user: {
            _id: message.userId,
            name: message.name
          },
          system: isSystemMessage,
        })
      }))
  }

  const onConnect = () => {
    if(!chatId || !innerStompClient) return;
    innerStompClient.subscribe(`/topic/chat/${chatId}`, (payload) => {
      onMessageReceived ? onMessageReceived(payload.body || payload) : innerOnMessageReceived(payload.body || payload);
    });

    onAfterConnected ? onAfterConnected(innerStompClient) : afterConnected(innerStompClient);
    setUpdate(false);
  }

  const onError = (err) => {
    console.log('on error',err);
  }

  const handleConnectStomp = () => {
    const socket = new SockJS(REACT_APP_WS_URL);
    socket.binaryType = "arraybuffer";
  
    innerStompClient = new Client({
      webSocketFactory: () => socket,
      connectHeaders: {
        Authorization: `Bearer ${userToken}`
      },
      reconnectDelay: 5000, // Tenta reconectar a cada 5 segundos
      onConnect: onConnect,
      onStompError: onError,
      onWebSocketClose: () => {
        setUpdate(true);
      }
    });
  
    innerStompClient.activate();

    setStompClient(innerStompClient);
  }

  useEffect(()=> {
    if(!update && !chatId){
      return
    };
    handleConnectStomp();
  }, [update, chatId]);
  
  useEffect(()=> {
    if(!updateWebSocket){
      return
    };
    handleConnectStomp();
  }, [updateWebSocket]);

  return {
    stompClient
  }
};