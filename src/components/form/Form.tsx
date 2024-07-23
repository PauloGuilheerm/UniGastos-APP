import { ReactElement } from 'react';
import { FormWrapper } from './context'
import { ContextProps } from './types/context'

export default function Form({ children, onSubmit, initialData } : ContextProps)  : ReactElement<ContextProps> {
  return <FormWrapper onSubmit={onSubmit} initialData={initialData}>
      {children}
  </FormWrapper>
}