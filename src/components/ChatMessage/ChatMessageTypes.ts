import { IMessage } from 'react-native-gifted-chat';

export interface ChatMessageProps {
    handleSend: (messages? : IMessage[] | undefined, content?: string) => void;
}