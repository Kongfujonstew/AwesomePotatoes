import React from 'react';
import { render } from 'react-dom';
import { graphql } from 'react-apollo';
import { AllMoviesQuery } from '../../apollo';
import MovieCard from '../../components/MovieCard';

const AllMovies = (props) => {
  const {data: { allMovies }} = props;
  console.log('props in Movies: ', props);
  return (
    <div id="cards">
      {allMovies ? allMovies.map(movie => { //.length?
        return (
          <MovieCard movie={movie} key={movie.id}/>
        )
      }) : 'null'}
    </div>
  );
};

const AllMoviesWithData = graphql(AllMoviesQuery)(AllMovies);

export default () => <AllMoviesWithData />

