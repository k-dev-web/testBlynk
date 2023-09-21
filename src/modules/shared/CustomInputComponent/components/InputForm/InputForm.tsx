import type { TInput, TInputForm } from '../../types';
import { ReactElement, useEffect, useMemo } from 'react';
import { Field, Form, useFormikContext } from 'formik';
import { CustomButton } from '../../../CustomButton/CustomButton';
import { InputType } from '../../types';
import toast from 'react-hot-toast';
import { CustomColorPicker } from './CustomColorPicker/CustomColorPicker';

export function InputForm({ type, ...props }: TInputForm): ReactElement {
  const { errors, touched } = useFormikContext<TInput>();
  const rows = useMemo(() => (type === InputType.input ? 1 : 2), [type]);
  const color = useMemo(() => (type === InputType.input ? 'primary' : 'secondary'), [type]);
  useEffect(() => {
    if (errors.text && touched.text) {
      toast.error('name items required', {
        position: 'top-right',
      });
    }
  }, [errors.text, touched]);
  return (
    <Form {...props}>
      <div className='ItemInputComponent'>
        {type === InputType.comment && <Field component={CustomColorPicker} name='color' />}
        <Field as='textarea' name='text' rows={rows} placeholder='Type name here...' />
        <CustomButton type='submit' styleType='filled' color={color} text='Add new' />
      </div>
    </Form>
  );
}
