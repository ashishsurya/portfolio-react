import ProjectWrapper from '../components/ProjectWrapper';
import { getProjects } from '../utils/getProjects';

function ProjectsScreen() {
  const projects = getProjects();

  return (
    <div className='max-w-4xl mx-auto sm:px-4 mt-9'>
      <p className='py-9 text-justify p-4 sm:p-0 tracking-wide leading-8'>
        Showcase of all my projects, most of the projects are web based
        particularly <p className='text-xl inline-block font-black'>React</p>{' '}
        based and recently I started exploring Android/IOS/Flutter
      </p>
      <div className='bg-indigo-300 p-4 rounded-t-xl pt-6 gap-4 flex flex-col'>
        {projects.map((project) => (
          <ProjectWrapper key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsScreen;
