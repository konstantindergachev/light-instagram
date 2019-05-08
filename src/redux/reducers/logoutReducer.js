import TYPES from '../actions/types';

export const initialState = {
  logout: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOGOUT:
      return {
        ...state,
        logout: true,
      };
    default:
      return state;
  }
}
