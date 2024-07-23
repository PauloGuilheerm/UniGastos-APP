import {useField, UnformField} from '@unform/core';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useFieldProps} from './useFomField.type';

export default function useFormField(name, initialValue, {getValue: customGetValue, onError}={}) {
  const valueRef = useRef(null);

  const [value, setValue] = useState();

  const {fieldName, registerField, defaultValue, error} = useField(name);

  const handleChange = useCallback((value)=>{
    if (value!==undefined) {
      setValue(value);
      valueRef.value = value;
    }
  }, [valueRef]);

  const getValue = useCallback((ref)=>customGetValue ? customGetValue(ref): ref.value, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: valueRef,
      getValue,
      clearValue: (ref, value) => handleChange(value),
      setValue: (ref, value) => handleChange(value),
    });
  }, [valueRef, fieldName, registerField, getValue, handleChange]);

  useEffect(() => {
    handleChange(defaultValue);
  }, [defaultValue, handleChange]);

  useEffect(() => {
    handleChange(initialValue);
  }, [initialValue, handleChange]);

  useEffect(()=>{
    onError && onError(error);
  }, [onError, error]);

  return {
    fieldName, 
    setValue: handleChange, 
    value,
    ref: valueRef, 
    error
};
}
