// import PageContainer from '../PageContainer';
import Link from 'next/link';
import styled from 'styled-components';
import MoviesWithData from '../../components_apollo/MoviesWithData';

const Index = styled.div`
  #banner {
    background-color: blue;
    color: white;
    height: 500px;
  }
`

export default () => (
  <Index id="index">
    <div id="banner">
      Welcome to Awesome Potatoes
    </div>
    <Link prefetch href='/home'><a>Click here for the Best Movie Reviews</a></Link>
    <h1>Now trending</h1>
    <MoviesWithData />
  </Index>
);

