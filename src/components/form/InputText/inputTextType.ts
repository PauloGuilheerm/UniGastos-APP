import { InterfaceInputProps } from 'native-base/lib/typescript/components/primitives/Input/types'; 
import { StyleProp, ViewStyle } from 'react-native';

export interface InputTextType extends InterfaceInputProps{
    name?: string;
    label?: string;
    onChangeText?: (value: string | undefined) => void;
    style?:  StyleProp<ViewStyle> | undefined;
    value?: any | undefined;
}