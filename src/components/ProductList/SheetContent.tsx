import { View, Button } from 'native-base';
import { ReactElement, useState } from 'react';
import { Keyboard, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SheetManager } from 'react-native-actions-sheet';
import ActionSheet from 'react-native-actions-sheet';

import { useAppContext } from '@Context';
import { FormInputText, Form } from '@Components/form';
import { useFormContext } from '@Components/form/context';
import { stylesSheetContent } from '@Assets/components/productList/sheetContent'
import { onSubmitProps } from '@Components/form/types/context';

import { costProps } from './types/costTypes';
import { SubmitProps } from './types/sheetContent';

export default function SheetContentLayout({ item, sheetId }: costProps): ReactElement<costProps> {
  const { stompClient, roomData, userData } = useAppContext();

  const handleSubmit = async ({ data: payload }: onSubmitProps<SubmitProps>) => {
    if (!payload) return;
    Keyboard.dismiss();

    if (!item) {

      stompClient.publish({
        destination: `/app/chat/${roomData?.id}/addCost`,
        body: JSON.stringify({
          product: payload.product,
          quantity: parseFloat(payload.quantity.replace(',', '.')),
          cost: parseFloat(payload.cost.replace(',', '.')),
          chatId: roomData?.id,
          totalSpend: roomData?.costs?.totalSpend,
          userId: userData?.id
        })
      });
      SheetManager.hide('costSheet');
      return;
    }

    stompClient.publish({
      destination: `/app/chat/${roomData?.id}/updateProduct`,
      body: JSON.stringify({
        product: payload.product,
        quantity: parseFloat(payload.quantity.replace(',', '.')),
        cost: parseFloat(payload.cost.replace(',', '.')),
        chatId: roomData?.id,
        totalSpend: roomData?.costs?.totalSpend,
        userId: userData?.id,
        productId: item.id
      })
    });

    SheetManager.hide(item?.id ?? "");
  };

  return <Form initialData={{ ...item, quantity: item?.quantity?.toString(), cost: item?.cost?.toString() }} onSubmit={handleSubmit}>
    <SheetContent sheetId={sheetId} item={item} />
  </Form>;
};

function SheetContent({ sheetId, item }: costProps): ReactElement<costProps> {
  const [quantity, setQuantity] = useState<string>(item?.quantity?.toString() || "0");
  
  const handleAddQuantity = () => setQuantity((prev) => (parseInt(prev) + 1).toString());
  const handleRemoveQuantity = () => setQuantity((prev) => (parseInt(prev) == 0 ? 0 : parseInt(prev) - 1).toString());

  const { formRef } = useFormContext();

  return <ActionSheet id={sheetId} containerStyle={stylesSheetContent.sheetContainer}>
    <View style={stylesSheetContent.container}>
      <Icon
        name="arrow-left"
        onPress={() => SheetManager.hide(sheetId ?? "")}
        size={18}
        style={{ marginTop: 12 }}
      />
      <FormInputText
        placeholder="Produto"
        name="product"
        type="text"
        variant="rounded"
        style={{ width: "90%" }}
      />
    </View>
    <View>
      <View style={stylesSheetContent.containerInputQuantity}>
        <TouchableOpacity onPress={handleRemoveQuantity}>
          <View style={stylesSheetContent.containerMinusIcon}>
            <FontAwesome name='minus' />
          </View>
        </TouchableOpacity>
        <FormInputText
          label="Quantidade"
          name="quantity"
          value={quantity}
          keyboardType="numeric"
          variant="filled"
          onChangeText={(value : any)=> setQuantity(value.toString())}
          style={{ width: '80%' }}
        />
        <TouchableOpacity onPress={handleAddQuantity}>
          <View style={stylesSheetContent.containerPlusIcon}>
            <FontAwesome name='plus' />
          </View>
        </TouchableOpacity>
      </View>
      <View style={stylesSheetContent.containerInputValue}>
        <FormInputText
          label="Valor"
          name="cost"
          keyboardType="numeric"
          variant="filled"
          style={{ width: '100%' }}
        />
      </View>
      <View style={stylesSheetContent.editProductContainer}>
        <Button style={stylesSheetContent.editProduct} onPress={() => formRef?.current?.submitForm()}>
          {item?.product ? 'Editar produto' : 'Adicionar produto'}
        </Button>
      </View>
    </View>
  </ActionSheet>
}