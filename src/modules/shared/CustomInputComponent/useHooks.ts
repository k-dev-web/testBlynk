import type { TInput } from './types';
import { useCallback } from 'react';
import { FormikHelpers } from 'formik';

export function useHooks(submitClick: (data: TInput) => void) {
  const onButtonClick = useCallback(
    (data: TInput, formik: FormikHelpers<TInput>) => {
      submitClick(data);
      formik.resetForm();
    },
    [submitClick],
  );

  return { onButtonClick };
}
