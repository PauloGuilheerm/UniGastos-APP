import { ReactElement, useEffect, useMemo, useState, ComponentType } from "react";
import { View, Text, Badge, useClipboard, Button, Toast } from "native-base";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { InputText } from '../../components/form';
import { stylesRoom } from "../../assets/screens/Room";
import { navigate } from "../../routes/navigationRef";
import Modal from '../../components/Modal';
import UserMenu from "../../components/UserMenu";
import { useAppContext } from "../../context";

export default function RoomHeader() : ReactElement {
  const [openModal, setOpenModal] = useState(false);
  const [total, setTotal] = useState<string>("0");

  const { roomData, setRoomData, stompClient, userData, setUpdate } = useAppContext();
  const { onCopy } = useClipboard();

  useEffect(() => {
    setTotal(roomData?.costs?.totalSpend?.toString() ?? "0");
  }, [roomData?.costs?.totalSpend]);

  const balanceColor : string = useMemo(() => {
    let color = '';
    const balance = roomData?.costs?.balance ?? 0;

    const red = '#FF0000';
    const yellow = '#FFFF00';
    const green = '#00FF00'

    switch (true) {
      case balance <= 0:
        color = red;
        break;
      case balance <= 40:
        color = yellow;
        break;
      default:
        color = green;
        break;
    }

    return color;
  }, [roomData?.costs]);

  const handleCopyRoomId = async () => {
    onCopy(roomData?.roomId ?? "");
    Toast.show({
      description: "Copiado com sucesso!",
      duration: 1500,
      placement: "top"
    });
  };

  const handleRoomLeave = () => {
    stompClient.deactivate();
    setRoomData(undefined);
    navigate('Rooms', true);
  };

  const handleTotal = (value : string | undefined) => {
    setTotal(value ?? "0");
  };

  const handleClose = (resetTotal = true) => {
    setOpenModal(false);
    if (resetTotal) {
      handleTotal(roomData?.costs?.totalSpend?.toString() ?? "0");
    }
  };

  const handleSendNewSpend = () => {
    stompClient.publish({
      destination: `/app/chat/${roomData?.id}/changeTotalSpend`,
      body: JSON.stringify({
        chatId: roomData?.id,
        totalSpend: total,
        userId: userData?.id
      })
    });
    handleClose(false);
  };

  function ModalActions () : ReactElement {
    return <Button onPress={handleSendNewSpend}>
      <Text color="white">
        Salvar
      </Text>
    </Button>
  };

  return <View style={stylesRoom.container}>
    <View style={stylesRoom.header}>
      <View style={stylesRoom.iconContainer}>
        <TouchableOpacity onPress={handleRoomLeave}>
          <Icon
            name="chevron-left"
            color="white"
            size={20}
            style={stylesRoom.icon}
          />
        </TouchableOpacity>
        <UserMenu />
      </View>
      <View>
        <Text style={stylesRoom.textRoomName} numberOfLines={1} ellipsizeMode="tail">
          {roomData?.roomName}
        </Text>
        <Text style={stylesRoom.textRoomType}>
          Market
        </Text>
      </View>
      <TouchableOpacity onPress={handleCopyRoomId}>
        <Badge borderRadius={15} width={100} flexDirection="row" variant="solid">
          <View style={stylesRoom.badgeView}>
            <Icon
              style={stylesRoom.badgeIcon}
              name="copy"
              size={13}
            />
            <Text style={stylesRoom.textRoomId}>
              {roomData?.roomId}
            </Text>
          </View>
        </Badge>
      </TouchableOpacity>
    </View>
    <View style={stylesRoom.roomStatistics}>
      <TouchableOpacity onPress={() => setOpenModal(true)}>
        <View>
          <Text style={stylesRoom.textRoomStatistics}>
            Total a gastar
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={stylesRoom.subTextRoomStatistics}>
              R$ {roomData?.costs?.totalSpend}
            </Text>
            <Icon
              name="edit"
              color="white"
              size={13}
              style={{ ...stylesRoom.icon, padding: 0, paddingTop: 3 }}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Modal title="Editar total" isOpen={openModal} modalActions={ModalActions} onClose={handleClose}>
        <InputText
          value={total}
          onChangeText={handleTotal}
          variant="rounded"
          placeholder="Total"
          keyboardType="numeric"
        />
      </Modal>
      <View>
        <Text style={stylesRoom.textRoomStatistics}>
          Total gasto
        </Text>
        <Text style={stylesRoom.subTextRoomStatistics}>
          R$ {roomData?.costs?.total}
        </Text>
      </View>
      <View>
        <Text style={stylesRoom.textRoomStatistics}>
          Sobra
        </Text>
        <Text style={{ ...stylesRoom.subTextRoomStatistics, color: balanceColor }}>
          R$ {roomData?.costs?.balance}
        </Text>
      </View>
    </View>
  </View>
}