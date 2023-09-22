import type { TInput } from './types';
import { useMemo } from 'react';
import * as Yup from 'yup';

const itemInitialValues = { text: '' };
const commentInitialValues = { text: '', color: '#000000' };

export function useData(): { itemInitialValues: TInput; commentInitialValues: TInput } {
  return { itemInitialValues, commentInitialValues };
}
export const inputValidationSchemas = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMemo(() => {
    return Yup.object().shape({
      text: Yup.string().required('not be empty'),
    });
  }, []);
};
