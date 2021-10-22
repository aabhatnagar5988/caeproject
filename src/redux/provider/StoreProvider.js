import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {initStore} from './store';

export const StoreProvider = React.memo(props => {
  const {children} = props;
  const {store, persistor} = initStore();

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </ReduxProvider>
  );
});
