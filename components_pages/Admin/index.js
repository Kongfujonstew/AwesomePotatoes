import styled from 'styled-components';
import MoviesWithData from '../../components_apollo/MoviesWithData';
import CreateMovieContainer from '../../components_apollo/CreateMovieWithData';

const Admin = styled.div`

`

export default () => (
  <Admin id="admin">
    <CreateMovieContainer />
    <MoviesWithData />
  </Admin>
);


