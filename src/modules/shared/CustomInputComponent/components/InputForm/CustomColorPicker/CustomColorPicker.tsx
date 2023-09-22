import { ReactElement } from 'react';
import './CustomColorPicker.scss';
import { useHooks } from './useHooks';

export function CustomColorPicker({ ...props }): ReactElement {
  const { changeColor } = useHooks(props);
  return (
    <div className='CustomColorPicker'>
      <input type='color' onChange={changeColor} value={props.field.value}></input>
    </div>
  );
}
