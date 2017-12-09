import { bindActionCreators } from 'redux';
import { login, logout, selectMovie } from './actions';
import initStore from './index';

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch),
    logout: bindActionCreators(logout, dispatch),
    selectMovie: bindActionCreators(selectMovie, dispatch)
  }
};

export default {
  createStore: initStore,
  storeKey: 'reduxStore',
  mapStateToProps: mapStateToProps,
  mapDispatchToProps: mapDispatchToProps
};
