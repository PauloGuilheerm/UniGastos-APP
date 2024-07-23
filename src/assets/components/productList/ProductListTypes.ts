import { ViewStyle, TextStyle } from "react-native";

export interface CostStyle {
  container: ViewStyle;
  costContainer: ViewStyle;
  rightContainer: ViewStyle;
  costText: TextStyle;
  iconContainer: ViewStyle;
  costView: ViewStyle;
}

export interface EmptyListStyle {
  container: ViewStyle;
  emptyListText: TextStyle;
}

export interface ProdctListStyle {
  container: ViewStyle;
  buttonAddProduct: ViewStyle;
}

export interface SheetContentStyle {
  sheetContainer: ViewStyle;
  container: ViewStyle;
  containerSubInputs: ViewStyle;
  iconArrowLeft: ViewStyle;
  iconSum: ViewStyle;
  editProductContainer: ViewStyle;
  editProduct: ViewStyle & TextStyle;
}