// src/LoadingOverlay.js

import {View, Text} from 'native-base';
import { ActivityIndicator, Modal } from 'react-native';

import LoadingOverlayProps from './LoadingOverlayProps';
import { stylesLoadingOverlay } from '@Assets/components/loadingOverlay';
import { ReactElement } from 'react';

export default function LoadingOverlay({ visible = false }: LoadingOverlayProps) : ReactElement<LoadingOverlayProps>{
  return <Modal
      transparent={true}
      animationType="fade"
      visible={visible ? true : false} 
    >
      <View style={stylesLoadingOverlay.overlay}>
        <View style={stylesLoadingOverlay.container}>
          <ActivityIndicator size="large" color="#ffffff" />
          <Text style={stylesLoadingOverlay.loadingText}>Carregando...</Text>
        </View>
      </View>
    </Modal>
};
