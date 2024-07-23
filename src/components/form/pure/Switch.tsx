import { Switch } from 'native-base';
import { InputSwitchType } from '../Switch/switchType';
import { ReactElement } from 'react';

export default function InputText(props: InputSwitchType) : ReactElement<InputSwitchType>{
  return <Switch {...props} />
}