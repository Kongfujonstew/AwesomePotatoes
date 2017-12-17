import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import actionTypes from './actionTypes';

import { reducer as formReducer } from 'redux-form'; //

// MAIN REDUCER
const userReducer = (state = {}, action) => { //
  switch (action.type) {
  case actionTypes.LOGIN:
    return Object.assign({}, state, { loggedIn: true, profile: action.profile });
  case actionTypes.LOGOUT:
    return Object.assign({}, state, { loggedIn: false, profile: action.profile });
  case actionTypes.SELECT_MOVIE:
    return Object.assign({}, state, { selectedMovieId: action.movieId });
  default: return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer
});

//STATE PERSISTENCE
const persistState = (reducer) => {
  return (state, action) => {
    const newState = reducer(state, action);
    if (typeof window === 'undefined') {
      return { user: {}};
    } else {
      localStorage.setItem('reduxState', JSON.stringify(newState));
      return newState;
    }
  };
};

const persistedReducer = persistState(rootReducer);

// ACTIONS
export default () => {
  const getPersistedState = () => {
    if (typeof window === 'undefined') {
      return {};
    } else {
      const persistedState = JSON.parse(localStorage.getItem('reduxState'));
      const state = persistedState ? persistedState : {};
      return state;
    }
  };

  const store = createStore(persistedReducer,
    getPersistedState(),
    composeWithDevTools(
      applyMiddleware(thunkMiddleware)));

  return store;
};


