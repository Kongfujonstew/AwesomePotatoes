import React from 'react';
import { render } from 'react-dom';
import { graphql } from 'react-apollo';
import { ApolloProvider } from 'react-apollo';
import { AllMoviesQuery } from './_gql';
import { client } from './_apolloClient';
import Card from '../components/Card';

// import './MoviesWithData.css';

const Movies = (props) => {
  const {data: { allMovies }} = props;
  console.log('props in Movies: ', props);
  return (
    <div id="cards">
      {allMovies ? allMovies.map(movie => { //.length?
        return (
          <Card movie={movie} key={movie.id}/>
        )
      }) : 'null'}
    </div>
  );
};

const DataComponent = graphql(AllMoviesQuery)
  // options: (props) => ({})
(Movies);

export default () => {
  return (
    <ApolloProvider client={client}>
      <DataComponent />
    </ApolloProvider>
  )
};


