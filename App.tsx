import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import AppWrapper from './src/context';
import Routes from './src/routes';
import 'text-encoding-polyfill'

export default function App() {
  return <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <AppWrapper>
          <StatusBar backgroundColor="#001F3F"/>
          <Routes />
        </AppWrapper>
      </NativeBaseProvider>
    </SafeAreaView>
  </SafeAreaProvider>
};