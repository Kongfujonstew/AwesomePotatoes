import React from 'react';
import { render } from 'react-dom';
import { graphql } from 'react-apollo';
import { AllMoviesQuery } from '../../apollo';
import MovieCard from '../../components/MovieCard';

const AllMovies = (props) => {
  const {data: { allMovies }} = props;
  return (
    <div id="cards">
      {allMovies ? allMovies.map(movie => { //.length?
        return (
          <MovieCard movie={movie} key={movie.id}/>
        )
      }) : 'Loading movie data . . .'}
    </div>
  );
};

const AllMoviesWithData = graphql(AllMoviesQuery, {
  options: { pollInterval: 500}
})(AllMovies);

export default () => <AllMoviesWithData />

