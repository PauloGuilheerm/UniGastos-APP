import { Input } from 'native-base';
import { ReactElement } from 'react';
import { InputTextType } from '../InputText/inputTextType';

function InputText(props: InputTextType) : ReactElement<InputTextType>{
  return <Input {...props} />
};

export default InputText;