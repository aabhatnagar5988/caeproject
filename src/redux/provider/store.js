import {persistReducer, persistStore} from 'redux-persist';
import {rootReducer} from '../reducer/rootreducer';
import {createStore} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const initStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return {store, persistor};
};
