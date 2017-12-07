import Link from 'next/link';
import AuthButton from './AuthButton';

export default ({ children }) => (
  <div>
    <header>
      <nav>
        <Link prefetch href='/home'><a>Home</a></Link> |
        <Link prefetch href='/about'><a>About</a></Link> |
        <Link prefetch href='/contact'><a>Contact</a></Link>
      </nav>
      <AuthButton />
    </header>
      { children }
    <footer>
      {'Jon Michael Stewart'}
    </footer>
  </div>
);

