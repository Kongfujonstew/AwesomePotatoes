import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import actionTypes from './actionTypes';

// MAIN REDUCER
const reducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return Object.assign({}, state, { loggedIn: true, profile: action.profile });
    case actionTypes.LOGOUT:
      return Object.assign({}, state, { loggedIn: false, profile: action.profile });
    case actionTypes.SELECT_MOVIE:
      return Object.assign({}, state, { selectedMovieId: action.movieId });
    default: return state
  };
};

// ACTIONS
export default (initialState = { loggedIn: false }) => {
  console.log('creating store');
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
