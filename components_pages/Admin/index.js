// import PageContainer from '../PageContainer';
import Link from 'next/link';
import styled from 'styled-components';
import MoviesWithData from '../../components_apollo/MoviesWithData';
import CreateMovieWithData from '../../components_apollo/CreateMovieWithData';


const Admin = styled.div`

`


export default () => (
  <Admin id="admin">
    <CreateMovieWithData />
    <MoviesWithData />
  </Admin>
);


