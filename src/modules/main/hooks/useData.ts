import { useCallback, useEffect, useState } from 'react';
import { LocalStorageService } from '../../../utils/services/localStorageServices';
import type { TComment, TItem } from '../types';
import toast from 'react-hot-toast';
import { LocalStorageStaticKeys } from '../../../utils/enums/LocalStorageStaticKeys';

export function useData() {
  const [items, setItems] = useState<TItem[]>(
    JSON.parse(LocalStorageService.getItem(LocalStorageStaticKeys.Items) || '[]'),
  );
  const [selectedItem, setSelectedItem] = useState(
    JSON.parse(LocalStorageService.getItem(LocalStorageStaticKeys.SelectedItem) || 'null'),
  );
  const [comments, setComments] = useState<TComment[]>(
    selectedItem ? JSON.parse(LocalStorageService.getItem(selectedItem.id) || '[]') : [],
  );

  const addNewItem = useCallback(
    ({ text }: any) => {
      setItems([...items, { id: new Date().getTime(), title: text, commentCount: 0 }]);
    },
    [items],
  );
  const removeItem = useCallback(
    (event: React.SyntheticEvent<EventTarget>) => {
      //@ts-ignore
      const id = Number(event.currentTarget.dataset['id']);
      if (items[id].id === selectedItem?.id) {
        setSelectedItem(null);
      }
      LocalStorageService.removeItem(items[id].id.toString());
      setItems([...items.slice(0, id), ...items.slice(id + 1)]);
    },
    [items, selectedItem?.id],
  );

  const changeSelected = useCallback(
    (event: React.SyntheticEvent<EventTarget>) => {
      //@ts-ignore
      const item = items[Number(event.currentTarget.dataset['id'])];
      if (item.id !== selectedItem?.id) {
        setSelectedItem(item);
      }
    },
    [items, selectedItem],
  );
  const addNewComment = useCallback(
    ({ text, color }: any) => {
      if (!selectedItem) {
        toast.error('you must select item');
        return;
      }
      setComments([...comments, { color: color, title: text }]);
      setItems(
        items.map(item => {
          if (selectedItem.id === item.id) {
            return { ...item, commentCount: item.commentCount++ };
          } else {
            return item;
          }
        }),
      );
      console.log(items);
    },
    [comments, items, selectedItem],
  );

  useEffect(() => {
    LocalStorageService.setItem(LocalStorageStaticKeys.SelectedItem, selectedItem);
    if (selectedItem) {
      setComments(JSON.parse(LocalStorageService.getItem(selectedItem.id) || '[]'));
    } else {
      setComments([]);
    }
  }, [selectedItem]);
  useEffect(() => {
    LocalStorageService.setItem(LocalStorageStaticKeys.Items, items);
  }, [items]);
  useEffect(() => {
    if (selectedItem) {
      LocalStorageService.setItem(selectedItem.id, comments);
    }
  }, [comments]);

  return { items, comments, addNewItem, removeItem, changeSelected, selectedItem, addNewComment };
}
