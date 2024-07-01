import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectUrlIcon } from '../../../../../utils';
import { ProjectsProps } from './interface';
import { SkillList } from '../../../../../common';

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className='grid h-[calc(75vh-70px)] grid-cols-1 gap-5 overflow-y-auto p-2 lg:grid-cols-2'>
      {projects.map((project, i) => (
        <div
          className='flex flex-col rounded-xl border-[1px] border-gray-200 bg-white drop-shadow'
          key={i}
        >
          <Image
            className='h-[200px] w-full min-w-full rounded-t-xl object-cover'
            src={project.image}
            width={1000}
            height={500}
            alt={project.name}
          />
          <div className='flex flex-1 flex-col items-center justify-between gap-4 p-4 lg:items-start'>
            <div className='flex w-full flex-col gap-2'>
              <span className='block text-xl font-bold'>{project.name}</span>
              <SkillList skills={project.skills} />
              <span className='block whitespace-pre-line text-base lg:min-h-[120px]'>
                {project.description}
              </span>
            </div>
            <div className='flex w-full flex-row justify-end gap-4'>
              {project.urls.map((projectUrl, index) => {
                return (
                  <Link
                    href={new URL(projectUrl.url)}
                    title={projectUrl.name}
                    key={index}
                  >
                    {getProjectUrlIcon(projectUrl.name)}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
