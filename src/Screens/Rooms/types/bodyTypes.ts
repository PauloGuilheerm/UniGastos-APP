import React from 'react';
import { Chat } from './roomsTypes';
export interface bodyProps {
    chats: Chat[], 
    setChats: React.Dispatch<React.SetStateAction<Chat[]>>, 
    setFilteredChats: React.Dispatch<React.SetStateAction<Chat[]>>, 
}