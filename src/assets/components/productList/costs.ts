import { StyleSheet } from 'react-native';
import { CostStyle } from './ProductListTypes';

export const styleCost = StyleSheet.create<CostStyle>({
  container: {
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginHorizontal: 20,
    marginBottom: 20
  },
  costContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '85%',
    width: 100,
    marginTop: 8
  },
  rightContainer: {
    flexDirection: 'row',
    width: 140,
    marginRight: 10,
  },
  costText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 70,
    padding: 20
  },
  costView: {
    flexDirection: 'column',
    marginLeft: 20
  }
});