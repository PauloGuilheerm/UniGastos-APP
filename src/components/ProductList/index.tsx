import { View, FlatList, Button } from 'native-base';
import { useEffect, ReactElement } from 'react';
import { SheetProvider, SheetManager } from 'react-native-actions-sheet';

import { useAppContext } from '@Context';
import { stylesProductList } from '@Assets/components/productList/productList';

import RegisterSheet from '../ActionSheet';
import EmptyList from './EmptyList';
import Costs from './Costs';
import { costProps } from './types/costTypes';
import SheetContent from './SheetContent';

export default function ProductListLayout() : ReactElement {
  return <SheetProvider>
    <ProductList />
  </SheetProvider>
};


function ProductList() : ReactElement {
  const { roomData, stompClient, setRoomData, loading } = useAppContext();

  useEffect(() => {
    RegisterSheet({name: 'costSheet', sheet: SheetContent});
  }, [roomData?.costs]);

  useEffect(() => {
    roomData?.costs?.products?.forEach((item) => {
      RegisterSheet({name: item.id, sheet: () => <SheetContent  item={item} sheetId={item?.id} />})
    })
  }, [roomData?.costs]);

  useEffect(() => {
    return () => {
      setRoomData(undefined);
    }
  }, []);

  return <View flex={1} style={stylesProductList.container}>
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => item.id ?? ""}
        data={roomData?.costs?.products || []}
        renderItem={({item}) => <Costs item={item} stompClient={stompClient} chatId={roomData?.id ?? ""} />}
        ListEmptyComponent={(!loading && !roomData?.costs?.products?.length) ? <EmptyList /> : null}
      />
    </View>
    <Button
      style={stylesProductList.buttonAddProduct}
      onPress={() => SheetManager.show('costSheet')}
    >
      Adicionar produto
    </Button>
  </View>
};