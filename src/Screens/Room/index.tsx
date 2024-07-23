import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ChatMessage from '@Components/ChatMessage';
import ProductList from '@Components/ProductList';
import Header from './Header';
import { ReactElement } from 'react';

const Tab = createBottomTabNavigator();

export default function Room() : ReactElement {
  return <>
    <Header />
    <Tab.Navigator
      initialRouteName='produtos'
      screenOptions={() => ({
        tabBarStyle: { backgroundColor: '#001F3F', borderTopWidth: 1, shadowColor: 'white' },
      })}
    >
      <Tab.Screen
        name="produtos"
        component={ProductList}
        options={{
          tabBarIcon: ({ focused }) => <FontAwesome name='list' size={28} color={focused ? "#FFDC00" : 'white'} />,
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
      <Tab.Screen
        name="mensagens"
        component={ChatMessage}
        options={{
          tabBarIcon: ({ focused }) => <FontAwesome name='wechat' size={28} color={focused ? "#FFDC00" : 'white'} />,
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
    </Tab.Navigator>
  </>
}