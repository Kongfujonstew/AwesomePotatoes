import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { GetMovieByGraphcoolIdQuery } from '../../apollo';

const url = process.env.GRAPHCOOL_URI;

class MovieInfo extends React.Component {
  static getInitialProps ({ store, isServer }) {
    if (isServer) {
      return {}
    } else {
      return store.getState();
    }
  }

  constructor(props) {
    super(props);
    this.state = {}
  };

  componentDidMount() {
    let id;
    if (window) {
      id = window.location.search.slice(4);
      console.log('bla id: ', id);
    }
    id && this.fetchMovieData(id)
      .catch(err => console.log('fetchMovieData err: ', err))
      .then(data => {
        console.log(' data onfethmd: ', data.data.data);
        if (data.data.data.allMovies && data.data.data.allMovies[0]){
          this.setState({movie: data.data.data.allMovies[0]});
        };
      });
  }

  fetchMovieData(id) {
    return axios.post(url, {
      headers: { 'Content-Type': 'application/json' },
      query: `query {
        allMovies (filter: {id:"${id}"}) {
          id
          name
          likes {
            id
          }
          description
        }
      }
    `
    });
  }

  render () {
    if (!this.state.movie) {
      return 'loading . . .'
    };
    // const {movie: { name, description, likes }} = this.props.data.getAllMovies;
    const { name, description, likes } = this.state.movie
    return (
      <div>
        {'Graphcool movie data queried by Id: '}
        <div>{'name: ' + name}</div>
        <div>{'description: ' + name}</div>
        <div>{'likes: ' + likes.length}</div>
      </div>
    );
  };
};

export default () => <MovieInfo/>
