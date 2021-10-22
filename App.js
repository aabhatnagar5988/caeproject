/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StoreProvider} from './src/redux/provider/StoreProvider';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/rootNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <StoreProvider>
        <RootNavigator />
      </StoreProvider>
    </NavigationContainer>
  );
};

export default App;
