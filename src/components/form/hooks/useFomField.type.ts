import {UnformField} from '@unform/core';

export interface useFieldProps{
    fieldName: string;
    registerField: <T>(field: UnformField<T>) => void;
    defaultValue: any;
    clearError: () => void;
    error: string | undefined;
};