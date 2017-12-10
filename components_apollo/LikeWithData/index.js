import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { client } from '../../apollo';

class Like extends React.Component {
  static getInitialProps ({ store, isServer }) {
    if (isServer) {
      return {};
    } else {
      return store.getState();
    }
  }

  constructor(props) {
    super(props);
  }

  handleClick () {
    const id = this.props.movie.id;
  }

  render () {
    const {movie: { name, description, likes }} = this.props;
    const likesNumber = likes.length
    return (
      <div className="like"
        onClick={this.handleClick.bind(this)}
      > {'Like'}
      </div>
    );
  }
};

