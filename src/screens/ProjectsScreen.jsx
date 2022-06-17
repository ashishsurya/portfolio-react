import { useEffect } from 'react';
import { useState } from 'react';
import ProjectWrapper from '../components/ProjectWrapper';
import { getProjects } from '../utils/getProjects';
import {motion} from 'framer-motion'

function ProjectsScreen() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  return (
    <div className='bg-[#4F45E4] !text-white'>
      <div className='max-w-4xl mx-auto sm:px-4  '>
        <motion.h2
          initial={{ y: 100, opacity: 0.1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='py-[100px] text-justify text-zinc-300 px-4   tracking-wide leading-8'
        >
          Showcase of all my projects, most of the projects are web based
          particularly{' '}
          <h1 className=' inline-block text-white font-black '>
            React
          </h1>{' '}
          based and recently I started exploring native mobile development.
        </motion.h2>
        <div className=' p-4 rounded-t-xl pt-6 gap-5 flex flex-col'>
          {projects?.map((project) => (
            <ProjectWrapper key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsScreen;
