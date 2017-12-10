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
    default: return state;
  };
};

//STATE PERSISTENCE
const persistState = (reducer) => {
  return (state, action) => {
    const newState = reducer(state, action)
    if (typeof window === 'undefined') {
      return {};
    } else {
      localStorage.setItem('reduxState', JSON.stringify(newState));
      return newState;
    }   
  }
}

const persistedReducer = persistState(reducer);

// ACTIONS
export default () => {

  const getPersistedState = () => {
    if (typeof window === 'undefined') {
      return {};
    } else {
      const persistedState = JSON.parse(localStorage.getItem('reduxState'));
      const state = persistedState ? persistedState : { loggedIn: false };
      return JSON.parse(localStorage.getItem('reduxState'));
    }
  }


  const store = createStore(persistedReducer,
    getPersistedState(),
    composeWithDevTools(
      applyMiddleware(thunkMiddleware)));


  return store;
};
