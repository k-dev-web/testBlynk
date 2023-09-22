import React, { ReactElement } from 'react';
import './Main.scss';
import { Card } from './components/Card/Card';
import { CardTitle } from './components/CardTitle/CardTitle';
import { CustomInputComponent } from '../shared/CustomInputComponent/CustomInputComponent';
import { useData } from './hooks/useData';
import { ItemViewComponent } from './components/ItemView/ItemViewComponent';
import { CommentViewComponent } from './components/CommentView/CommentViewComponent';
import { TComment } from './types';

export function Main(): ReactElement {
  const { items, addNewItem, removeItem, changeSelected, selectedItem, addNewComment } = useData();
  return (
    <div className='App'>
      <div className='react-aside'>
        <h2>DAYRY APP</h2>
        <p>Comment whit no sense</p>
      </div>
      <div className='react-main'>
        <Card>
          <CardTitle text='Items' />
          <CustomInputComponent submitClick={addNewItem} type='input' />
          <>
            {items.map((item, index) => (
              <ItemViewComponent
                key={`item-${index}`}
                index={index}
                removeItem={removeItem}
                title={item.title}
                commentCount={item.comments?.length || 0}
                onClick={changeSelected}
                selected={selectedItem?.id === item.id}
              />
            ))}
          </>
        </Card>
        <Card>
          <CardTitle text={`Comment for ${selectedItem?.title || ''} item`} />
          <>
            {selectedItem &&
              selectedItem.comments?.map((comment: TComment, index: number) => (
                <CommentViewComponent key={`comment-${index}`} title={comment.title} color={comment.color} />
              ))}
          </>
          <div className='comment-input-container'>
            <CustomInputComponent submitClick={addNewComment} type='comment' />
          </div>
        </Card>
      </div>
    </div>
  );
}
