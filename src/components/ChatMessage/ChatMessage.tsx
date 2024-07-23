import { ReactElement, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { stylesChatMessage } from '@Assets/components/chatMessage';

import { InputText } from '../form';
import { ChatMessageProps } from './ChatMessageTypes';

export default function ChatMessage({ handleSend } : ChatMessageProps): ReactElement<ChatMessageProps> {
  const [text, setText] = useState<string | undefined>('');

  const send = () : void => {
    handleSend(undefined, text ?? "");
    setText('');
  };

  return <InputText
    value={text}
    onChangeText={setText}
    variant="rounded"
    placeholder="Envie uma mensagem..."
    width="95%"
    marginBottom={10}
    marginLeft={2}
    rightElement={<TouchableOpacity style={{ height: '100%' }} onPress={send}>
      <View bg="green.500" style={stylesChatMessage.chatInputSend}>
        <FontAwesome style={{marginTop: 20}} name="chevron-right" size={12} />
      </View>
    </TouchableOpacity>}
  />
}