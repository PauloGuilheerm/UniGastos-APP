import { ReactElement } from 'react';
import { FormControl, WarningOutlineIcon, View } from 'native-base';
import PropTypes from 'prop-types';

import InputSwitch from '../pure/Switch'
import { useFormContext } from '../context'
import { InputSwitchType } from './switchType'
import useFormField from '../hooks/useFormField';

export default function FormInputSwitch({ label, placeholder, onChangeText, value, name, width, colorScheme } : InputSwitchType) : ReactElement<InputSwitchType> {
  const { formRef } = useFormContext();
  const { fieldName, value: fieldValue, setValue, ref, error} = useFormField(name, value);

  const handleChange = (value : string | undefined) => {
    setValue(value);
    onChangeText && onChangeText(value);
    formRef?.current?.setErrors({...formRef?.current.getErrors(), [name] : null});
  };

  return <View width={width}>
    <FormControl flexDirection="row" alignItems="center" isInvalid={!!error} w="100%">
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <InputSwitch
        ref={ref}
        colorScheme={colorScheme}
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

FormInputSwitch.defaultProps = {
  width: "100%",
  colorScheme: 'primary'
};