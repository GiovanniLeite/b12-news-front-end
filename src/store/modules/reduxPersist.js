import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default function Main(reducers) {
  const persistedReducers = persistReducer(
    {
      key: 'NEWS',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  );

  return persistedReducers;
}
