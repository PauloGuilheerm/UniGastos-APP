import { MutableRefObject, RefCallback} from 'react';
import { InterfaceSwitchProps } from 'native-base/lib/typescript/components/primitives/Switch/types';

export interface InputSwitchType extends InterfaceSwitchProps{
    name?: string;
    label?: string;
    onChangeText?: (value: string | undefined) => void;
    colorScheme: string;
    placeholder: string;
    ref?: MutableRefObject<any> | RefCallback<any>;
}