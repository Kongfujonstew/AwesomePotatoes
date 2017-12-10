import React from 'react';
import { render } from 'react-dom';
import { graphql } from 'react-apollo';
import { ApolloProvider } from 'react-apollo';
import { client, AllMoviesQuery, CreateMovieMutation } from '../../apollo';
// import Card from '../../components/MovieCard';

class CreateMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault()
    const name = this.refs.name.value;
    const description = this.refs.description.value;
    this.props.mutate({
      variables: { name, description }
    })
      .then(({ data }) => {
        console.log('data returned', data);
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
  }


  render () {
    return (
      <div>
        <form>
          <h3>ADD MOVIE</h3>
          <p>Name</p>
          <input type="text" id="name" ref="name"/>
          <p>Description</p>
          <input type="text" id="description" ref="description"/><br/>
          <button
            onClick={this.handleClick.bind(this)}
          >Add</button>
        </form>
      </div>
    );
  }
};

const CreateMovieWithData = graphql(CreateMovieMutation)
(CreateMovie);

export default () => <CreateMovieWithData />

