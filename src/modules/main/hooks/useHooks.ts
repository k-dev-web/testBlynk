import { LocalStorageService } from '../../../utils/services/localStorageServices';

export function useHooks() {
  const getCountComment = (id: string | number) => {
    return JSON.parse(LocalStorageService.getItem(id.toString()) || '[]').length;
  };
  return { getCountComment };
}
