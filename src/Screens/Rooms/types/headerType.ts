import {Chat} from './roomsTypes';

export interface headerProps {
    chats: Chat[],
    setFilteredChats: (value: Chat[]) => void, 
}