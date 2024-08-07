import { StyleSheet } from 'react-native';
import { SheetContentStyle } from './ProductListTypes';

export const stylesSheetContent = StyleSheet.create<SheetContentStyle>({
  sheetContainer: {
    height: '50%', 
    flexDirection: 'column',
    backgroundColor: 'white', 
    padding: 20
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  containerInputQuantity: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 10,
    width: '90%',
    marginLeft: 15
  },
  containerInputValue: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  containerMinusIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginTop: 30,
    marginRight: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  containerPlusIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginTop: 30,
    marginLeft: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  iconArrowLeft: {
    paddingTop: 15,
    marginRight: 20
  },
  iconSum: {
    marginTop: 11
  },
  editProductContainer: {
    alignItems: 'center'
  },  
  editProduct: {
    flexDirection: 'row',
    borderRadius: 30, 
    width: '90%',
    marginBottom: 90,
    backgroundColor: "#2196F3",
    color: 'white',
    fontSize: 50
  }
});