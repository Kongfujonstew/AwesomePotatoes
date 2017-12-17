import Link from 'next/link';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

const CreateMovieComponentStyles = styled.div`
  header {
    background-color: lightgreen;
    font-family: 'Cabin', sans-serif;
  }
  footer {
    background-color: black;
    color: white;
    font-family: 'Cabin', sans-serif;
    margin-top: 175px;
  }
`

const CreateMovieComponentForm = ({ handleClick }) => (
  <CreateMovieComponentStyles>
    <form onSubmit={handleClick}>
      <h3>ADD MOVIE</h3>
      <div>You must log in to add movies</div>
      <div>
        <label htmlFor="movieName">Movie Name: </label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="movieDescription">Description:</label>
        <Field name="description" component="input" type="text" />
      </div>
      <MuiThemeProvider>
        <RaisedButton label="Add Movie" onClick={handleClick} />
      </MuiThemeProvider>
    </form>
  </CreateMovieComponentStyles>
);

export default reduxForm({
  form: 'createMovie'
})(CreateMovieComponentForm);

