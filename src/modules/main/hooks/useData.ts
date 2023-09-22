import { useCallback, useEffect, useState } from 'react';
import { LocalStorageService } from '../../../utils/services/localStorageServices';
import type { TItem } from '../types';
import toast from 'react-hot-toast';
import { LocalStorageStaticKeys } from '../../../utils/enums/LocalStorageStaticKeys';

export function useData() {
  const [items, setItems] = useState<TItem[]>(
    JSON.parse(LocalStorageService.getItem(LocalStorageStaticKeys.Items) || '[]'),
  );
  const [selectedItem, setSelectedItem] = useState(
    JSON.parse(LocalStorageService.getItem(LocalStorageStaticKeys.SelectedItem) || 'null'),
  );

  const addNewItem = useCallback(
    ({ text }: any) => {
      setItems([...items, { id: new Date().getTime(), title: text }]);
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
      setItems(
        items.map(item => {
          if (selectedItem.id === item.id) {
            const updatedItem = { ...item, comments: [...(item.comments || []), { color: color, title: text }] };
            setSelectedItem(updatedItem);
            return updatedItem;
          } else {
            return item;
          }
        }),
      );
    },
    [items, selectedItem],
  );

  useEffect(() => {
    LocalStorageService.setItem(LocalStorageStaticKeys.SelectedItem, selectedItem);
  }, [selectedItem]);
  useEffect(() => {
    LocalStorageService.setItem(LocalStorageStaticKeys.Items, items);
  }, [items]);

  return { items, addNewItem, removeItem, changeSelected, selectedItem, addNewComment };
}
