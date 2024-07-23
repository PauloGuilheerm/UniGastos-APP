import { Text, Box } from 'native-base';
import { ReactElement } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { stylesEmptyList } from '../../assets/components/productList/emptyList'

export default function EmptyProducts(): ReactElement {
  return <Box style={stylesEmptyList.container}>
    <Text style={stylesEmptyList.emptyListText}>
      Sua lista de produtos está vazia
    </Text>
    <Icon name='alert-circle-outline' size={20} color="white" />
  </Box>
}