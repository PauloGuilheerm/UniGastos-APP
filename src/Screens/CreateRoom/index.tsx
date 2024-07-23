import { useEffect, useState } from 'react';
import { Button, View, Toast } from 'native-base';

import { useAppContext } from '@Context';
import { Form } from '@Components/form';
import { FormInputText } from '@Components/form';
import { useFormContext } from '@Components/form/context';
import { onSubmitProps } from '@Components/form/types/context';
import UseWebSocket from '@Hooks/useWebSocket';
import HttpClient from '@Service/httpClient';
import { styleCreateRoom } from '@Assets/screens/createRoom';
import { navigate } from '@Routes/navigationRef';

import Header from './Header';
import { SubmitProps } from './CreateRoomTypes';

export default function CreateRoomLayout() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const { setStompClient, setRoomData, userData, setLoading } = useAppContext();

  const { stompClient } = UseWebSocket({
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

  useEffect(() => {
    if (!stompClient) return;
    setStompClient(stompClient);
    navigate('Room', false);
  }, [stompClient]);

  const handleSubmit = async ({ data: payload, formRef }: onSubmitProps<SubmitProps>) => {
    if (!payload.title) {
      formRef.current.setErrors({ title: 'Nome da sala precisa ser preenchido' });
      return;
    }

    try {
      setLoading(true);

      const chatId = await HttpClient.post('/chat/createChat', { ...payload, userId: userData?.id }).then((res) => res.data.data.id);
      
      setSelectedChatId(chatId);

      setStompClient(stompClient);
      formRef.current.setData({ title: '' });
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

  return <Form onSubmit={handleSubmit} style={styleCreateRoom.container}>
    <CreateRoom />
  </Form>
}

function CreateRoom() {
  const { formRef } = useFormContext();

  return <View style={styleCreateRoom.container}>
    <Header />
    <View style={styleCreateRoom.inputContainer}>
      <FormInputText
        placeholder="Nome da sala"
        name="title"
        type="text"
        variant="rounded"
        paddingLeft="5"
        style={{ width: "90%", height: 10 }}
      />
    </View>
    <View style={styleCreateRoom.createButtonContainer}>
      <Button
        size="md"
        style={styleCreateRoom.createRoomButton}
        onPress={() => formRef?.current.submitForm()}
      >
        Criar sala
      </Button>
    </View>
  </View>
};