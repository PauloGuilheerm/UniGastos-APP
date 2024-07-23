import { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Rooms from './Rooms';
import JoinRoom from '../JoinRoom';
import CreateRoom from '../CreateRoom';

const Tab = createBottomTabNavigator();

export default function Tabs() : ReactElement {
  return <>
    <Tab.Navigator 
    initialRouteName='chats' 
    screenOptions={() => ({ 
      tabBarStyle: { backgroundColor: '#001F3F', borderTopWidth: 1, shadowColor: 'white' },
    })}
    >
      <Tab.Screen
        name="chats"
        component={Rooms}
        options={{
          tabBarIcon: ({ focused }) => <FontAwesome name='list' size={28} color={focused ? "#FFDC00" : "white"} />,
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
       <Tab.Screen
        name="joinRoom"
        component={JoinRoom}
        options={{
          tabBarIcon: ({ focused }) => <FontAwesome name="wechat" size={28} color={focused ? "#FFDC00" : "white"} />,
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
       <Tab.Screen
        name="createRoom"
        component={CreateRoom}
        options={{
          tabBarIcon: ({ focused }) => <FontAwesome name="cart-plus" size={28} color={focused ? "#FFDC00" : "white"} />,
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
    </Tab.Navigator>
  </>
}
