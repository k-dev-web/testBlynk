import React, { useCallback } from 'react';

export function useHooks({ ...props }) {
  const changeColor = useCallback(
    (event: React.SyntheticEvent) => {
      //@ts-ignore
      props.form.setFieldValue(props.field.name, event.currentTarget.value);
    },
    [props.field.name, props.form],
  );
  return { changeColor };
}
