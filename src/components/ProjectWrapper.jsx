import Icon from '@mdi/react';
import { mdiAttachment } from '@mdi/js';
import ReactImageGallery from 'react-image-gallery';
import { motion } from 'framer-motion';

const ProjectWrapper = ({ images, title, description, href, chips }) => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col md:flex-row gap-4  duration-300 z-10'
    >
      <motion.div
        initial={{ x:-50 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className='flex-1 rounded-lg'
      >
        <ReactImageGallery
          lazyLoad
          showBullets
          items={images}
          showPlayButton={false}
        />
      </motion.div>
      {/* content */}
      <motion.div
      initial={{ x:50 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
        className='flex-1 p-3 flex flex-col'>
        <h1 className=''>
          {title}{' '}
          <a
            href={href}
            className='inline-block pl-1'
            target={'_blank'}
            rel='noreferrer'
          >
            <Icon path={mdiAttachment} size={1} />
          </a>
        </h1>
        <p className='mt-2  whitespace-pre-line'>{description}</p>
        <div className='flex gap-3 justify-self-end pt-2'>
          {chips.map((chip) => (
            <p className='chip' key={chip}>
              {chip}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectWrapper;
