import { useEffect, useState } from 'react';
import { Button, View, Toast } from 'native-base';

import { useAppContext } from '@Context';
import { Form } from '@Components/form';
import HttpClient from '@Service/httpClient';
import useWebSocket from '@Hooks/useWebSocket';
import { useFormContext } from '@Components/form/context';
import { onSubmitProps } from '@Components/form/types/context';
import { FormInputText } from '@Components/form';
import { styleJoinRoom } from '@Assets/screens/joinRoom';
import { navigate } from '@Routes/navigationRef';

import Header from './Header';
import { SubmitProps } from './JoinRoomTypes';

export default function JoinRoomLayout() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const { setStompClient, setRoomData, setLoading, userData } = useAppContext();

  const { stompClient } = useWebSocket({
    chatId: selectedChatId ?? "",
    userToken: userData?.token || '',
    setRoomData,
    user: userData
  });
  
  useEffect(() => {
    if (!stompClient) return;
    setStompClient(stompClient);
    navigate('Room', false);
  }, [stompClient]);

  const handleSubmit = async ({ data, formRef }: onSubmitProps<SubmitProps>) => {
    if (!data.roomid) {
      formRef.current.setErrors({ roomid: "ID da sala precisa ser preenchido" });
      return;
    }
    try {
      setLoading(true);
      const chatId: string = await HttpClient.get(`/chat/chatByRoomId?roomId=${data.roomid}`).then((res) => res.data.data.id);

      setSelectedChatId(chatId);

      navigate('Room', false);
      formRef.current.setData({ roomid: '' });
    } catch (err: unknown) {
      if (err instanceof Error) {
        const message = err.message;
        Toast.show({
          description: message,
          duration: 3000,
          placement: "top"
        });
      }
    }
  };

  return <Form onSubmit={handleSubmit} style={styleJoinRoom.container}>
    <JoinRoom />
  </Form>
}

function JoinRoom() {
  const { formRef } = useFormContext();
  return <View style={styleJoinRoom.container}>
    <Header />
    <View style={styleJoinRoom.inputContainer}>
      <FormInputText
        placeholder="ID da sala"
        name="roomid"
        type="text"
        variant="rounded"
        paddingLeft="5"
        style={{ width: "90%", height: 10 }}
      />
    </View>
    <View style={styleJoinRoom.joinButtonContainer}>
      <Button
        size="md"
        style={styleJoinRoom.joinRoomButton}
        onPress={() => formRef?.current?.submitForm()}
      >
        Entrar na sala
      </Button>
    </View>
  </View>
};