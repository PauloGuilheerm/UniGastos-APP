import { ReactElement } from 'react';
import { FormControl, WarningOutlineIcon, View } from 'native-base';
import PropTypes from 'prop-types';

import InputText from '../pure/InputText'
import { useFormContext } from '../context'
import { InputTextType } from './inputTextType';
import useFormField from '../hooks/useFormField';

export default function FormInputText({ label, placeholder, onChangeText, value, defaultValue, name, style} : InputTextType) : ReactElement<InputTextType> {
  const { formRef } = useFormContext();
  const { fieldName, value: fieldValue, setValue, ref, error} = useFormField(name, defaultValue || value);

  const handleChange = (value : string | undefined) => {
    setValue(value);
    onChangeText && onChangeText(value);
    formRef?.current?.setErrors({...formRef?.current.getErrors(), [name] : null});
  };

  return <View style={style}>
    <FormControl isInvalid={!!error} w="100%">
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <InputText
        ref={ref}
        variant="rounded"
        name={fieldName}
        value={fieldValue}
        onChangeText={handleChange}
        placeholder={placeholder}
        isInvalid={!!error}
      />
      {!!error && (
        <FormControl.ErrorMessage marginLeft={3} leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  </View>;
};