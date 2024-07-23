import UserData from "@Types/User";

import SockJS from 'sockjs-client';

export default interface useWebSocketProps {
    chatId: string;
    onMessageReceived?: Function; 
    onAfterConnected?: Function;
    setRoomData: Function, 
    userToken: string;
    user?:  UserData | null | undefined;
}

export interface useWebSocketReturn {
    stompClient: SockJS;
}