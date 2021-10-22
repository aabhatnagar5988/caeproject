import {GET_ALL_EVENTS, FETCH_USER_SUCCESS} from '../actions/useraction';
const initialState = {
  loading: false,
  userData: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        userData: action.payload.userData,
        loading: false,
      };
    }
  }
};
