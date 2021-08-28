import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import config from '../config';
import { rootReducer } from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  storage: AsyncStorage,
  key: 'primary',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  //   devTools: config.mode === 'debug',
});

export const persistor = persistStore(store);
