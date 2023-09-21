import { SyntheticEvent } from 'react';

export type TCustomButton = {
  text: string;
  styleType: 'filled' | 'outlined';
  onClick?: (event: SyntheticEvent<EventTarget, Event>) => void;
  'data-id'?: string | number;
  color?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset' | undefined;
};
