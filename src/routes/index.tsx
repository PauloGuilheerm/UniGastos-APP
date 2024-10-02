import { useLayoutEffect, useState, useEffect} from 'react';
import { BackHandler, AppState, AppStateStatus} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { isLoged, logIn } from '@Auth';
import { useAppContext } from '@Context';
import RoomType from '@Types/Room';
import { UserMessage } from '@Types/Message';
import Message from '@Types/Message';
import HttpClient from '@Service/httpClient';

import CreateRoom from '../Screens/CreateRoom';
import JoinRoom from '../Screens/JoinRoom';
import LogIn from '../Screens/LogIn';
import Rooms from '../Screens/Rooms';
import UserConfig from '../Screens/UserConfig';
import Room from '../Screens/Room';

import { navigationRef } from './navigationRef';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const [logedIn, setLogedIn] = useState(null);

  const { setUserData, setLoading, roomData, userData, setRoomData } = useAppContext();

  const handleAppStateChange = async (nextAppState : AppStateStatus) => {
    if (nextAppState === 'active' && logedIn && !!roomData?.id) {
      setLoading(true);

      const resp = await HttpClient.get(`/chat/chatById?chatId=${roomData?.id}`).then((res) => res.data.data);

      const formattedRoomData = new RoomType(resp.id, resp.roomId, resp.roomName, resp.costs, resp.participants, userData, resp?.messages);

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

      setLoading(false);
      setRoomData(formattedRoomData)
    }
  };

  const subscription = AppState.addEventListener('change', handleAppStateChange);
  
  useEffect(() => {


    return () => {
      subscription.remove();
    };
  }, [subscription]);

    useLayoutEffect(() => {
    (async () => {
      setLogedIn(await isLoged());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setUserData(await logIn());
    })()
  }, []);

  useEffect(() => {
    const backButtonHandler = () => {
      navigationRef.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backButtonHandler);

    return () => backHandler.remove();
  }, [navigationRef]);

  if (logedIn === null) return null;

  return <NavigationContainer ref={navigationRef}>
  <Stack.Navigator initialRouteName={logedIn ? 'Rooms' : 'LogIn'}>
    <Stack.Screen
      name="LogIn"
      component={LogIn}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="Rooms"
      component={Rooms}
      options={{
        headerShown: false,
        title: "",
      }}
    />
    <Stack.Screen
      name="CreateRoom"
      component={CreateRoom}
      options={{
        title: "Criar sala",
      }}
    />
    <Stack.Screen
      name="JoinRoom"
      component={JoinRoom}
      options={{
        headerShown: false,
        title: "Entrar em uma sala",
      }}
    />
    <Stack.Screen
      name="Room"
      component={Room}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="userConfig"
      component={UserConfig}
      options={{
        headerShown: false,
        title: "",
      }}
    />
  </Stack.Navigator>
</NavigationContainer>
};