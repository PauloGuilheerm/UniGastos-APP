import { useId, useMemo } from 'react';
import { View } from 'native-base';
import { GiftedChat, IMessage, User } from 'react-native-gifted-chat';

import { useAppContext } from '@Context';

import ChatInput from './ChatMessage';
import Message, { UserMessage } from '@Types/Message';
export default function ChatMessage() {
  const { roomData, userData, stompClient } = useAppContext();

  const id = useId();

  const messages = useMemo<IMessage[]>(()=> {
    if (roomData?.messages?.length) {
      const messages : IMessage[] = roomData?.messages?.map((message : Message) => {
        const newMessage : IMessage = {
          _id: message._id,
          text: message.text || message.content || "",
          createdAt: message.createdAt,
          user: message.user,
          system: message.system,
        };
        return newMessage;
      });

      return messages;
    };

    const userMessage : User = {
      _id:  userData?.id ?? "",
      name: userData?.name ?? ""
    };

    const newMessage : IMessage = {
      _id: id,
      text: "Sem mensagems por aqui...",
      createdAt: new Date(),
      user: userMessage,
      system: true
    }

    return [newMessage];
  }, [roomData?.messages]);

  const handleSend = (messages? : IMessage[] | undefined, content?: string) => {
    stompClient.publish({
      destination: `/app/chat/${roomData?.id}/sendMessage`,
      body: JSON.stringify({
        chatId: roomData?.id,
        content,
        userId: userData?.id
      })
    });
  };

  return <View flex={1} marginBottom={7}>
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{ _id: userData?.id ?? "", name: userData?.name }}
      renderInputToolbar={() => <ChatInput handleSend={handleSend} />}
    />
  </View>
};