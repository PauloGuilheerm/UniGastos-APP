import { createNavigationContainerRef, CommonActions } from '@react-navigation/native';

import { navigateProps } from './routesTypes';

export const navigationRef = createNavigationContainerRef()


export function navigate(name : string, isReset : boolean) : void {
  if (isReset) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name },
        ],
      }));
    return;
  }
  navigationRef.dispatch(CommonActions.navigate(name));
}