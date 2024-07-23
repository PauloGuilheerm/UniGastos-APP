import React, { ReactNode } from 'react';
import Room from '@Types/Room';
import UserData from '@Types/User';
import SockJS from 'sockjs-client';

export interface ContextProps {
    children: ReactNode
};

export interface ContextType {
    loading?: boolean | null,
    setLoading: React.Dispatch<React.SetStateAction<boolean | null>>, 
    roomData: Room | undefined,
    setRoomData: React.Dispatch<React.SetStateAction<Room | undefined>>, 
    userData?: UserData | null,
    setUserData: React.Dispatch<React.SetStateAction<UserData | null>>, 
    stompClient?: SockJS,
    setStompClient: React.Dispatch<React.SetStateAction<SockJS | null>>, 
    update: boolean,
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>, 
    updateWebSocket: boolean,
    setUpdateWebSocket: React.Dispatch<React.SetStateAction<boolean>>, 
};