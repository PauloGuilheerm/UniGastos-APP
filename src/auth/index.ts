import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import UserData from '@Types/User';
import HttpClient from '../service/httpClient';
import { navigate } from '../routes/navigationRef';

export const isLoged = async () : Promise<boolean> => {
  const token = await getToken();
  return !!token;
}

export const logIn = async () : Promise<UserData | null> => {
  const userData = await getUserData();
  if (userData) {
    const { data: { data } } = await HttpClient.get(`/user/userById?userId=${userData.id}`);
    const token : string | null = await getToken();

    const user = new UserData(data?.id, data?.name, data.email, token || '', data?.urlImg);
    await saveUserData(user);
    return user;
  };

  return null;
};

export const LogOff = async () : Promise<void> => {
  
  await saveToken('');
  await saveUserData(null);
  
  navigate('LogIn', false);
  
  await GoogleSignin.signOut();
};

export const getToken = () : Promise<string | null> =>
  AsyncStorage.getItem('token');

export const saveToken = (token : string) : Promise<void> =>
  AsyncStorage.setItem('token', token);


export const saveUserData = (data : UserData | null | undefined) : Promise<void> =>
  AsyncStorage.setItem('user', data ? JSON.stringify(data) : "");


export const getUserData = async () : Promise<UserData | undefined> => {
  const data : UserData | null = JSON.parse(await AsyncStorage.getItem('user') || "");
  const token = await AsyncStorage.getItem('token') || "";

  if(data?.id){
    const user = new UserData(data?.id, data?.name, data.email, token, data?.urlImg);
    return user;
  };
}