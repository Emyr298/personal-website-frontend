import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectUrlIcon } from '../../../../../utils';
import { ProjectsProps } from './interface';
import { SkillList } from '../../../../../common';

export const Projects : React.FC<ProjectsProps> = ({
  projects,
}) => {
  return (
    <div className='flex flex-row flex-wrap gap-5'>
      {
        projects.map((project, i) => (
          <div className='flex-1 border-[1px] border-gray-200 rounded-xl bg-white drop-shadow flex flex-col min-w-[300px]' key={i}>
            <Image
              className='object-cover rounded-t-xl min-w-full w-full h-[200px]'
              src={project.image}
              width={1000}
              height={500}
              alt={project.name}
            />
            <div className='p-4 flex-1 flex flex-col justify-between items-center lg:items-start gap-4'>
              <div className='w-full flex flex-col gap-2'>
                <span className='text-xl font-bold block'>{project.name}</span>
                <SkillList skills={project.skills} />
                <span className='text-base block lg:min-h-[120px] whitespace-pre-line'>{project.description}</span>
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
