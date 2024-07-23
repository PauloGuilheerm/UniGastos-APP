import { View, Text, Badge, Menu as NBMenu } from 'native-base';
import { ReactElement } from 'react';
import { SheetManager } from 'react-native-actions-sheet';
import { TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styleCost } from '@Assets/components/productList/costs';
import { costProps } from './types/costTypes';

export default function Costs({ item, stompClient, chatId }: costProps): ReactElement<costProps> {

  const handleDeleteItem = () => {
    stompClient.publish({
      destination: `/app/chat/${chatId}/deleteProduct`,
      body: JSON.stringify({
        chatId,
        productId: item?.id
      })
    });
  };

  const handleOpenSheet = () => {
    SheetManager.show(item?.id ?? "")
  }

  return <TouchableOpacity onPress={handleOpenSheet}>
    <View style={styleCost.container}>
      <View style={styleCost.costView}>
        <View>
          <Badge variant="solid" borderRadius="2xl" width={8}>
            <Text style={{ ...styleCost.costText, color: 'white', fontSize: 9 }}>
              {`${item?.name?.[0]}${item?.name?.[1]}`.toUpperCase()}
            </Text>
          </Badge>
        </View>
        <Text style={{ ...styleCost.costText, marginLeft: 5, marginTop: 2 }}>
          {item?.product} x{item?.quantity}
        </Text>
      </View>
      <View style={styleCost.rightContainer}>
        <View style={styleCost.costContainer}>
          <Text style={styleCost.costText}>
            Valor unitário
          </Text>
          <Text style={{ ...styleCost.costText, marginTop: 4 }}>
            R$ {item?.cost}
          </Text>
        </View>
        <NBMenu width="100%" placement="bottom right" trigger={triggerProps => {
          return <>
            <Pressable accessibilityLabel="opções de produto" {...triggerProps}>
              <View style={styleCost.iconContainer}>
                <Icon name="ellipsis-v" size={18} />
              </View>
            </Pressable>
          </>
        }}>
          <NBMenu.Item onPress={handleOpenSheet}>Editar</NBMenu.Item>
          <NBMenu.Item onPress={handleDeleteItem}>Deletar</NBMenu.Item>
        </NBMenu>
      </View>
    </View>
  </TouchableOpacity>
};