// import PageContainer from '../PageContainer';
import Link from 'next/link';
import styled from 'styled-components';
import MoviesWithData from '../../components_apollo/MoviesWithData';

const Home = styled.div`

`

export default () => (
  <Home id="home">
    <MoviesWithData />
  </Home>
);

