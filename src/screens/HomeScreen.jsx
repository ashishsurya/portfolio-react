/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import { mdiGithub, mdiEmail, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';
import { motion } from 'framer-motion';

export default function HomeScreen() {
  return (
    <Fragment>
      <Hero />
      <Skills />
    </Fragment>
  );
}

function Skills() {
  return (
    <div className='grid place-items-center py-16'>
      <h1 className='text-indigo-600 text-5xl md:text-7xl tracking-wider'>
        Skills
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-lg p-5 gap-5 mt-4'>
        <DetailedSkills
          skills={[
            'https://img.icons8.com/color/48/undefined/c-plus-plus-logo.png',
            'https://img.icons8.com/color/48/undefined/python--v1.png',
            'https://img.icons8.com/color/48/undefined/javascript--v1.png',
          ]}
          title='Programming Languages'
        />
        <DetailedSkills
          title='Libraries / Frameworks'
          skills={[
            'https://img.icons8.com/color/48/undefined/react-native.png',
            'https://img.icons8.com/color/48/undefined/nextjs.png',
            'https://img.icons8.com/color/48/undefined/material-ui.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
            'https://img.icons8.com/color/48/undefined/flask.png',
          ]}
        />
        <DetailedSkills
          title='Database / Querying Languages'
          skills={[
            'https://img.icons8.com/color/48/undefined/graphql.png',
            'https://img.icons8.com/color/48/undefined/postgreesql.png',
            'https://img.icons8.com/color/48/undefined/mongodb.png',
          ]}
        />
      </div>
    </div>
  );
}

function DetailedSkills({ title, skills }) {
  return (
    <div className='flex flex-col items-center gap-3'>
      <h3>{title}</h3>
      <div>
        {skills?.map((skill) => (
          <img src={skill} key={skill} alt='' className='w-[48px]' />
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className='grid place-items-center py-20 gap-4 bg-indigo-600 text-white'>
      <MetaData />
      <motion.p
        initial={{ y: 100, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='max-w-lg text-justify text-indigo-300 px-2'
      >
        Currently in my final year of B.Tech ( CSE ) in Indian Institute of
        Information Technology Kottayam . I'm having a good knowledge in Web
        development and Data Structures{' '}
      </motion.p>
      <p className='animate-bounce text-lg'>Looking for internships</p>
      <HeroContactWrapper />
      {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href='https://drive.google.com/file/d/12oQldZr-1VDveU4CkqMgTizAyTg7a4-H/view?usp=sharing'
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
      <motion.h2
        initial={{ y: 100, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I am ????????
      </motion.h2>

      <motion.h1
         initial={{ y: 100, opacity: 0.1 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 1 }}
        className='text-5xl md:text-7xl tracking-wider'
      >
        Surya Ashish
      </motion.h1>
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
        href={'mailto:ashishbvs009@gmail.com'}
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
