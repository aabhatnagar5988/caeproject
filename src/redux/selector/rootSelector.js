import {createSelector} from 'reselect';

export const getAppState = state => state;
export const isLoading = createSelector(getAppState, state => state.loading);
export const allEvents = createSelector(getAppState, state => state.userData);
