import React from 'react';
import { render } from 'react-dom';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { CreateMovieMutation } from '../../apollo';
import CreateMovieComponent from './CreateMovieComponent';

class CreateMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    const { name, description } = this.props.form.createMovie.values;
    this.props.mutate({
      variables: { name, description }
    })
      .then(({ data }) => {
        console.log('movie created: ', data);
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
  }

  render() {
    return (
      <CreateMovieComponent 
        handleClick={this.handleClick.bind(this)}
      />
    );
  }
};

const mapStateToProps = ({ form }) => ({ form });

export default compose(
  connect(mapStateToProps),
  graphql(CreateMovieMutation)
)(CreateMovie);
