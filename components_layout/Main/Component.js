import Link from 'next/link';
import styled from 'styled-components';
import AuthButton from '../../components_apollo/AuthButton';

const Layout = styled.div`
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

export default ({ children }) => (
  <Layout id="layout">
    <header>
      <nav>{'Public nav: '}
        <Link href='/home'><a>Home</a></Link> |
        <Link href='/about'><a>About</a></Link> |
        <Link href='/contact'><a>Contact</a></Link>
      </nav>
      <nav>{'Admin nav: '}
        <Link href='/admin'><a>Admin</a></Link> |
        <Link href='/profile'><a>User Profile</a></Link>
      </nav>
      <AuthButton />
    </header>
      { children }
    <footer>
      {'Jon Michael Stewart'}
    </footer>
  </Layout>
);
