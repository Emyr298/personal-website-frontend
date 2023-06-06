import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectUrlIcon } from '../../../../../utils';
import { ProjectsProps } from './interface';

export const Projects : React.FC<ProjectsProps> = ({
  projects,
}) => {  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
      {
        projects.map((project, i) => (
          <div className='border-[1px] border-gray-200 p-3 rounded-xl bg-white drop-shadow flex flex-col lg:flex-row gap-2 lg:gap-4' key={i}>
            <Image
              className='object-cover rounded-xl min-w-full lg:min-w-[75px] xl:min-w-[250px]'
              src={project.image}
              width={200}
              height={200}
              alt={project.name}  
            />
            <div className='flex-1 flex flex-col justify-between items-center lg:items-start gap-4'>
              <div className='w-full flex flex-col gap-2'>
                <span className='text-xl font-bold block'>{project.name}</span>
                <span className='text-base block lg:min-h-[120px] max-h-[120px] overflow-y-scroll'>{project.description}</span>
              </div>
              <div className='w-full flex flex-row justify-end gap-4'>
                {
                  project.urls.map((projectUrl, index) => {
                    return (
                      <Link href={new URL(projectUrl.url)} title={projectUrl.name} key={index}>
                        {getProjectUrlIcon(projectUrl.name)}
                      </Link>
                    );
                  })
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};
