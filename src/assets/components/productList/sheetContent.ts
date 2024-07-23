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
  containerSubInputs: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 10
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