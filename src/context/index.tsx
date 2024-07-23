import PropTypes from 'prop-types';
import React, { createContext, useContext, useState,ReactElement, useEffect, useLayoutEffect, Context } from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import LoadingOverlay from '@Components/LoadingOverlay';
import Room from '@Types/Room';
import UserData from '@Types/User';

import { ContextType } from './ContextTypes';

import { getUserData } from '../auth';
import {ContextProps} from './ContextTypes';

const AppContext = createContext<ContextType | undefined>(undefined);

export const useAppContext = () => {
  const context =  useContext<ContextType | undefined>(AppContext);
  if (!context) {
    throw new Error('useTodoContext deve ser usado dentro de um provedor TodoContext');
}
return context;
};

export default function AppWrapper({ children } : ContextProps) : ReactElement<ContextProps> {
  const [loading, setLoading] = useState<Boolean | null>(null);
  const [roomData, setRoomData] = useState<Room | undefined>();
  const [userData, setUserData] = useState<UserData | undefined>();
  const [stompClient, setStompClient] = useState<SockJS | undefined>();
  const [update, setUpdate] = useState<boolean>(false);
  const [updateWebSocket, setUpdateWebSocket] = useState<boolean>(false);
  
  useEffect(()=> {
     if(!update) return;
     setUpdate(false);
   }, [update]);

  useEffect(()=> {
     if(!updateWebSocket) return;
     setUpdateWebSocket(false);
   }, [updateWebSocket]);

   useLayoutEffect(()=> {
     (async () => {
       setUserData(await getUserData());
     })();
   }, []);
  
  return <AppContext.Provider value={{
    roomData,
    setRoomData,
    userData,
    setUserData,
    stompClient,
    setStompClient,
    loading,
    setLoading,
    update,
    setUpdate,
    updateWebSocket,
    setUpdateWebSocket
  }}>
    <>
    <LoadingOverlay visible={loading}/>
    {children}
    </>
  </AppContext.Provider>;
};

AppWrapper.propTypes = {
  children: PropTypes.any.isRequired
};