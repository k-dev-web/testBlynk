import { ReactElement } from 'react';
import './ItemViewComponent.scss';
import type { TItemViewComponent } from './types';
import { CustomButton } from '../../../shared/CustomButton/CustomButton';

export function ItemViewComponent({
  index,
  removeItem,
  title,
  commentCount,
  onClick,
  selected,
}: TItemViewComponent): ReactElement {
  return (
    <div className={`ItemViewComponent ${selected ? 'selected' : ''}`} data-id={index}>
      <div className='end' onClick={onClick} data-id={index}>
        {title}
        <span className='badge'>{commentCount}</span>
      </div>
      <CustomButton styleType='outlined' text='Delete' onClick={removeItem} data-id={index} />
    </div>
  );
}
