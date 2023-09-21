import { ReactElement, useMemo } from 'react';
import type { TInput, TItemInputComponent } from './types';
import './CustomInputComponent.scss';
import { useHooks } from './useHooks';
import { Formik } from 'formik';
import { inputValidationSchemas, useData } from './useData';
import { InputForm } from './components/InputForm/InputForm';
import { InputType } from './types';

export function CustomInputComponent({ submitClick, type }: TItemInputComponent): ReactElement {
  const { onButtonClick } = useHooks(submitClick);
  const { itemInitialValues, commentInitialValues } = useData();
  const validationSchema = inputValidationSchemas();
  const initialValues = useMemo(
    () => (type === InputType.input ? itemInitialValues : commentInitialValues),
    [commentInitialValues, itemInitialValues, type],
  );
  return (
    <Formik<TInput>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onButtonClick}
      validateOnBlur={false}>
      <InputForm type={type} />
    </Formik>
  );
}
