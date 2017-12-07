import actionTypes from './actionTypes';

export const login = () => dispatch => {
  return dispatch({ type: actionTypes.LOGIN });
};

export const logout = () => dispatch => {
  return dispatch({ type: actionTypes.LOGOUT });
};
