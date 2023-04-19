import React, { useState } from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { BsGit } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export const Projects : React.FC<Props> = ({}) => {
  const PROJECTS = [
    {
      name: 'Personal Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://cdn.segmentnextimages.com/wp-content/uploads/2022/08/Xenoblade-Chronicles-3-Noah.jpg',
      repository: 'https://github.com',
      site: 'https://google.com',
    },
    {
      name: 'Sussy Site',
      description: 'Site Sussy',
      image: 'https://cdn.segmentnextimages.com/wp-content/uploads/2022/08/Xenoblade-Chronicles-3-Noah.jpg',
      repository: null,
      site: 'https://google.com',
    },
    {
      name: 'Deploy for me PLS',
      description: 'JK',
      image: 'https://cdn.segmentnextimages.com/wp-content/uploads/2022/08/Xenoblade-Chronicles-3-Noah.jpg',
      repository: 'https://github.com',
      site: null,
    },
  ];
  
  return (
    <div className='flex flex-col gap-4'>
      {
        PROJECTS.map((project, i) => (
          <div className='border-[1px] border-gray-200 p-3 rounded-xl bg-white drop-shadow flex flex-col-reverse lg:flex-row items-stretch gap-2 lg:gap-4' key={i}>
            <div className='lg:p-2 flex-1 flex flex-col justify-between items-center lg:items-start gap-4'>
              <div className='w-full flex flex-col gap-2'>
                <span className='text-xl font-bold block'>{project.name}</span>
                <span className='text-base block'>{project.description}</span>
              </div>
              <div className='w-full flex flex-row justify-end lg:justify-start gap-4'>
                {
                  !!project.repository &&
                  <Link href={new URL(project.repository)}>
                    <BsGit className='w-[24px] h-[24px]' />
                  </Link>
                }
                {
                  !!project.site &&
                  <Link href={project.site}>
                    <MdOpenInNew className='w-[24px] h-[24px]' />
                  </Link>
                }
              </div>
            </div>
            <Image
              className='object-cover rounded-xl w-full lg:w-[250px]'
              src={project.image}
              width={200}
              height={200}
              alt={project.name}  
            />
          </div>
        ))
      }
    </div>
  );
};
