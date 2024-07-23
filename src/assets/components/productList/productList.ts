import { StyleSheet } from 'react-native';
import { ProdctListStyle } from './ProductListTypes';

export const stylesProductList = StyleSheet.create<ProdctListStyle>({
  container: {
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#001F3F',
    paddingTop: 20,
  },
  buttonAddProduct: {
    borderRadius: 30,
    width: '90%',
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: "#2196F3"
  }
});