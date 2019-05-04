import TYPES from '../actions/types';

//Logout action creator 
export const logout = (history) => {
  return async (dispatch) => {
    try {
      localStorage.removeItem('token');
      history.push('/');
      dispatch({
        type: TYPES.LOGOUT,
      });
    } catch (err) {
      dispatch({
        type: TYPES.ERROR,
        payload: err.message,
      });
    }
  };
};
