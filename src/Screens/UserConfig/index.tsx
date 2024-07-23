import { useRef, useEffect, ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Avatar, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { onSubmitProps } from '@Components/form/types/context';
import { useAppContext } from "@Context";
import { stylesUserConfigs } from "@Assets/screens/userConfigs";
import HttpClient from "@Service/httpClient";
import { Form, FormInputText } from '@Components/form';
import { useFormContext } from '@Components/form/context';
import { saveUserData } from '@Auth';
import { navigationRef } from '@Routes/navigationRef';

import { SubmitProps } from './UserConfigTypes';
export default function UserProfileLayout() : ReactElement {
  const { setLoading, userData } = useAppContext();

  const handleSubmit = async ({ data, formRef }: onSubmitProps<SubmitProps>) => {
    if (!data.newUserName) {
      formRef?.current.setErrors({ newUserName: 'Nome precisa ser preenchido' });
      return;
    };

    setLoading(true);
    await HttpClient.post('/chat/updateUsername', { ...data, userId: userData?.id });
    if(!!userData){
      userData.name = data?.newUserName;
    }
    await saveUserData(userData);
    setLoading(false);
  };
  return <Form onSubmit={handleSubmit}>
    <UserProfile />
  </Form>
};

function UserProfile() {
  const { userData } = useAppContext();
  const { formRef } = useFormContext();

  return <>
    <View style={stylesUserConfigs.header}>
      <TouchableOpacity onPress={() => navigationRef.goBack()}>
        <Icon name="arrow-left" color="black" size={30} />
      </TouchableOpacity>
    </View>
    <View style={stylesUserConfigs.container}>
      <Avatar
        style={stylesUserConfigs.avatar}
        source={{
          uri: userData?.urlImg
        }}
      >
        <Text style={stylesUserConfigs.avatarText}>
          {`${userData?.name?.[0]}${userData?.name?.[1]}`.toUpperCase()}
        </Text>
      </Avatar>
      <View style={stylesUserConfigs.inputContainer}>
        <FormInputText 
        label="Nome" 
        name="newUserName" 
        defaultValue={userData?.name}
        style={{ width: "90%", height: 10 }}
        />
        {/* <FormInputSwitch label="Premium" name="premium" /> */}
      </View>
      <View style={stylesUserConfigs.saveButtonContainer}>
        <Button
          size="md"
          style={stylesUserConfigs.saveButton}
          onPress={() => formRef?.current.submitForm()}
        >
          <Text style={stylesUserConfigs.saveButtonText}>
            Salvar
          </Text>
        </Button>
      </View>
    </View>
  </>
};