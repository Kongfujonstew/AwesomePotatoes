import actionTypes from './actionTypes';

export const login = (profile) => dispatch => {
  return dispatch({ type: actionTypes.LOGIN, profile });
};

export const logout = () => dispatch => {
  return dispatch({ type: actionTypes.LOGOUT, profile: null });
};

export const selectMovie = (selectedMovieId) => dispatch => {
  return dispatch({
    type: actionTypes.SELECT_MOVIE,
    selectedMovieId
  });
};
