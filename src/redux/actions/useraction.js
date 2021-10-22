export const FETCH_USER_SUCCESS = '[User] Fetch user data successful';

export const userDataReceived = userData => ({
  type: FETCH_USER_SUCCESS,
  payload: {userData},
});

export const GET_ALL_EVENTS = '[User] get all events';

export const getAllEvents = () => ({
  type: GET_ALL_EVENTS,
  payload: {},
});
