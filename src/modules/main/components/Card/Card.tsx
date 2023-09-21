import { ReactElement } from 'react';
import type { TCard } from './types';
import './Card.scss';

export function Card({ children }: TCard): ReactElement {
  return <div className='Card'>{children}</div>;
}
