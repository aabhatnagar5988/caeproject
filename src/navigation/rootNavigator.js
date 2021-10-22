import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventsList} from '../components/EventsList';
import {EventDetailPage} from '../components/EventDetailPage';
const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={EventsList}
        options={{title: 'Events'}}
      />
      <Stack.Screen name="EventDetailPage" component={EventDetailPage} />
    </Stack.Navigator>
  );
};
