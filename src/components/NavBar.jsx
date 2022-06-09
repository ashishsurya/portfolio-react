import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-evenly sm:justify-center gap-4 text-lg py-4 bg-indigo-600 text-white'>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <Link to='/projects'>
        <p>Projects</p>
      </Link>
      <Link to='/experience'>
        <p>Experience</p>
      </Link>
    </nav>
  );
}
