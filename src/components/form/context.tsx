import PropTypes from 'prop-types';
import { createContext, useContext, useRef, ReactElement} from 'react';

import { Form } from '@unform/mobile';
import { SubmitHandler } from '@unform/core';
import { ContextProps, onSubmitProps } from './types/context';

const FormContext = createContext<ContextProps | undefined>(undefined);

export const useFormContext = () => {
  const context =  useContext<ContextProps | undefined>(FormContext);
  if (!context) {
    throw new Error('useTodoContext deve ser usado dentro de um provedor TodoContext');
}
return context;
};

export function FormWrapper({ children, onSubmit, initialData} : ContextProps) : ReactElement<ContextProps> {
  const formRef = useRef<any>(null);
  
  const handleFormSubmit: SubmitHandler<object> = (data) => {
    onSubmit({data, formRef});
};

  return <FormContext.Provider value={{ onSubmit, formRef }}>
    <Form ref={formRef} initialData={initialData} onSubmit={handleFormSubmit}>
      {children}
    </Form>
  </FormContext.Provider>;
};

FormWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  onSubmit: PropTypes.func,
};