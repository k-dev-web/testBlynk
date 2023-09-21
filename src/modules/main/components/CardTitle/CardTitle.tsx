import { ReactElement } from 'react';
import type { TCardTitle } from './types';
import './CardTitle.scss';

export function CardTitle({ text }: TCardTitle): ReactElement {
  return <h1 className='CardTitle'>{text}</h1>;
}
