export class LocalStorageService {
  public static setItem<T>(key: string, value: T): void {
    return localStorage.setItem(key, convertDataForSaveStorage(value));
  }

  public static getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  public static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public static clear(): void {
    localStorage.clear();
  }
}

function convertDataForSaveStorage<T>(value: T): string {
  if (value === null && value === undefined) {
    return '';
  } else if (typeof value === 'string') {
    return value;
  } else {
    return JSON.stringify(value);
  }
}
