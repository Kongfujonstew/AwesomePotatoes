import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Link from 'next/link';
import { selectMovie } from '../../redux/actions';
import Card from './styledCard';

class MovieCard extends React.Component {
  static getInitialProps ({ store, isServer }) {
    if (isServer) {
      return {}
    } else {
      return store.getState();
    }
  }

  constructor(props) {
    super(props);
  };

  handleClick () {
    const id = this.props.movie.id;
    this.props.selectMovie(this.props.movie.id);
  }

  render () {
    const {movie: { name, description, likes, id }} = this.props;
    const likesNumber = likes.length
    return (
      <Card>
        <div className="card">
          <Link href={`/movie?id=${id}`}>
            <h3 className="hover"
              onClick={this.handleClick.bind(this)}
            >{name ? name : 'No title'}</h3>
          </Link>
          <p>Likes: {likesNumber}</p>
          <p>Summary: {description}</p>
        </div>
      </Card>
    );
  };
}

const mapStateToProps = ({ selectedMovieId }) => ({ selectedMovieId });

const mapDispatchToProps = (dispatch) => {
  return {
    selectMovie: (selectedMovieId) => dispatch(selectMovie(selectedMovieId))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);

