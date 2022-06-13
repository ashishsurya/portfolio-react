import Icon from '@mdi/react';
import { mdiAttachment } from '@mdi/js';
import ReactImageGallery from 'react-image-gallery';

const ProjectWrapper = ({ images, title, description, href, chips }) => {
  return (
    <div className='flex flex-col md:flex-row shadow  rounded-lg bg-white hover:scale-110 duration-300 z-10'>
      <div className='flex-1 rounded-lg'>
        <ReactImageGallery items={images} showPlayButton={false} />
      </div>
      {/* content */}
      <div className='flex-1 p-3 flex flex-col'>
        <h1 className='text-indigo-600'>
          {title}{' '}
          <a href={href} className='inline-block pl-1' target={"_blank"} rel="noreferrer">
            <Icon path={mdiAttachment} size={1} />
          </a>
        </h1>
        <p className='mt-2 text-gray-700 whitespace-pre-line'>{description}</p>
        <div className='flex gap-3 justify-self-end pt-2'>
          {chips.map((chip) => (
            <p className='chip' key={chip}>
              {chip}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectWrapper;
