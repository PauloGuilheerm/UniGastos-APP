import { Box, Menu as NBMenu } from "native-base";
import { ReactElement } from "react";
import { Pressable } from 'react-native';
import { Avatar } from "native-base";

import { useAppContext } from "@Context";
import { LogOff } from "@Auth";
import { navigate } from "@Routes/navigationRef";

export default function UserMenu() : ReactElement {
  const { userData } = useAppContext();

  return <Box w="100%" alignItems="center">
    <NBMenu w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="User options" {...triggerProps}>
        <Avatar
          backgroundColor="#34495E"
          source={{
            uri: userData?.urlImg
          }}
        >
           {`${userData?.name?.[0]}${userData?.name?.[1]}`.toUpperCase()}
        </Avatar>
      </Pressable>;
    }}>
      <NBMenu.Item onPress={() => navigate({name: 'userConfig'})}>Perfil</NBMenu.Item>
      <NBMenu.Item onPress={LogOff}>Sair</NBMenu.Item>
    </NBMenu>
  </Box>;
};