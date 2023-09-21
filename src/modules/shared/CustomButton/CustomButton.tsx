import { ReactElement } from 'react';
import './CustomButton.scss';
import type { TCustomButton } from './types';

export function CustomButton({ text, styleType, color, ...props }: TCustomButton): ReactElement {
  return (
    <div className='custom-button'>
      <button className={`btn btn-primary ${styleType} ${color}`} {...props}>
        {text}
      </button>
    </div>
  );
}
