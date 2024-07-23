import { View } from 'native-base';
import { ReactElement } from 'react';

import GoogleAuth from '@Components/GoogleAuth';
import { styleLogin } from '@Assets/screens/logIn';

export default function LogInLayout() : ReactElement {
  return <View  style={styleLogin.container}>
    <GoogleAuth />
  </View>
}