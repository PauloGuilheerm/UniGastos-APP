import { ReactElement } from "react";
import { GoogleSignin, statusCodes, isErrorWithCode, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import {REACT_WEB_CLIENT_ID} from '@env';

import { navigate } from '@Routes/navigationRef';
import { useAppContext } from "@Context";
import { saveUserData, saveToken } from '@Auth';
import HttpClient from "@Service/httpClient";
import UserData from "@Types/User";

export default function App() : ReactElement {
  GoogleSignin.configure({
    webClientId: REACT_WEB_CLIENT_ID,
  });

  const {setUserData, setLoading} = useAppContext();

  const signIn = async () : Promise<void> => {
    try {
      setLoading(true);

      await GoogleSignin.hasPlayServices();
      const {user: userSignData} = await GoogleSignin.signIn();

      const { data: user } = await HttpClient.post('/signin', {
        name: userSignData.name,
        email: userSignData.email,
        password: userSignData.id,
        urlImg: userSignData.photo
      });

      const newUser = new UserData(
        user?.userId,
        user?.name,
        userSignData.email,
        user?.token,
        user?.urlImg,
      );
      setUserData(newUser);
      await saveToken(user.token);
      await saveUserData(newUser);
      navigate('Rooms');

      setLoading(false);
      
    } catch (err) {
      if (isErrorWithCode(err)) {
        switch (err.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            console.log('signin cancelled');
            break;
          case statusCodes.IN_PROGRESS:
            console.log('in progress');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('play services not available');
            break;
          default:
            console.log(err.message);
        }
      }
    }
  };

  return <GoogleSigninButton onPress={signIn} />
}