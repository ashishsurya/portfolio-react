/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import { mdiGithub, mdiEmail, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';

export default function HomeScreen() {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
}

function Hero() {
  return (
    <div className='grid place-items-center py-20 gap-4 bg-indigo-600 text-white'>
      <MetaData />
      <HeroContactWrapper />
      <p className='text-xl'>Full Stack Developer</p>
      <p className='animate-bounce'>Currently looking for internships</p>
      {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href=''
        className='bg-white text-indigo-600 px-3 py-4 rounded-2xl hover:scale-125 duration-500'
      >
        View My Resume
      </a>
    </div>
  );
}

function MetaData() {
  return (
    <Fragment>
      <img
        src='https://pbs.twimg.com/profile_images/1506852720648486914/8GDg7Fxh_400x400.jpg'
        alt='my-pic'
        className='rounded-full w-20 object-cover'
      />
      <h2 className=''>Hi, I am 👋🏼</h2>

      <h1 className='text-5xl md:text-7xl tracking-wider'>Surya Ashish</h1>
    </Fragment>
  );
}

function HeroContactWrapper() {
  return (
    <div className='flex items-center gap-3'>
      <SocialMediaIcon
        href={'https://github.com/ashishsurya'}
        path={mdiGithub}
      />
      <SocialMediaIcon
        href={'https://twitter.com/SuryaAshi'}
        path={mdiTwitter}
      />
      <SocialMediaIcon
        href={'mailto:ashishsurya126@gmail.com'}
        path={mdiEmail}
      />
    </div>
  );
}

function SocialMediaIcon({ path, href }) {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={href} target='_blank'>
      <Icon size={1.5} path={path} />
    </a>
  );
}
