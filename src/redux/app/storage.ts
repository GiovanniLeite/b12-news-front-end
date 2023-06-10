/* eslint-disable @typescript-eslint/no-unused-vars */
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

type Storage = {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
};

const createNoopStorage = (): Storage => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve();
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage: Storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

export default storage;
