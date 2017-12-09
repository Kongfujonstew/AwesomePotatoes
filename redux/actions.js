import actionTypes from './actionTypes';

export const login = (profile) => dispatch => {
  console.log('logging in profile: ', profile)
  return dispatch({ type: actionTypes.LOGIN, profile });
};

export const logout = () => dispatch => {
  return dispatch({ type: actionTypes.LOGOUT, profile: null });
};

export const selectMovie = (selectedMovieId) => dispatch => {
  console.log('dispatchign action with movieId: ', selectedMovieId);
  return dispatch({
    type: actionTypes.SELECT_MOVIE,
    selectedMovieId
  });
};
