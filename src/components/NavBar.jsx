export default function Navbar({ screen, setScreen }) {
  function handleRouting(from, to) {
    if (from === to) return;
    setScreen(to);
  }

  return (
    <nav className='flex items-center justify-evenly sm:justify-center gap-4 text-lg py-4 bg-indigo-600 text-white'>
      <p
        onClick={() => handleRouting(screen, 'home')}
        className='cursor-pointer'
      >
        Home
      </p>
      <p
        onClick={() => handleRouting(screen, 'projects')}
        className='cursor-pointer'
      >
        Projects
      </p>
      <p
        onClick={() => handleRouting(screen, 'experience')}
        className='cursor-pointer'
      >
        Experience
      </p>
    </nav>
  );
}
