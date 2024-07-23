import { useLayoutEffect, useState, useEffect } from 'react';
import { BackHandler, AppState } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { isLoged, logIn } from '@Auth';
import { useAppContext } from '@Context';

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

  const { setUserData, setUpdateWebSocket } = useAppContext();

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        setUpdateWebSocket(true);
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, []);

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