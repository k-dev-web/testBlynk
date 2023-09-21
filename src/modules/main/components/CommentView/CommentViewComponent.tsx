import { ReactElement, useMemo } from 'react';
import './CommentViewComponent.scss';
import type { TCommentViewComponent } from './types';

export function CommentViewComponent({ title, color }: TCommentViewComponent): ReactElement {
  const style = useMemo(() => {
    return { background: color };
  }, [color]);
  return (
    <div className='CommentViewComponent '>
      <div className='color' style={style} />
      <div className='text'>{title}</div>
    </div>
  );
}
