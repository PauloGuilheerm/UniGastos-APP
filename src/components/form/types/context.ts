import { ReactNode, MutableRefObject } from 'react';

export interface ContextProps {
    children?: ReactNode;
    onSubmit: (props: onSubmitProps<any>)=> void;
    formRef?: MutableRefObject<any>;
    style?: object,
    initialData?: object;
}

export interface onSubmitProps<T=object>{
    formRef: MutableRefObject<any>;
    data: T;
}