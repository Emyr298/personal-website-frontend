import React, { useState } from 'react';
import Image from 'next/image';

type Props = {};

export const Experience : React.FC<Props> = ({}) => {
  const dummyExperience = [ // add new endpoint to get experiences as affiliation's child
    {
      affiliation: 'Faculty of Computer Science, University of Indonesia',
      image: 'https://acakadul.files.wordpress.com/2013/08/makara-ui-fasilkom.png',
      positions: [
        {
          name: 'Teaching Assistant of Programming Foundations 2',
          time: 'July 2021 - July 2022',
          skills: ['OOP', 'Java'],
          description: 'Ehe',
        },
        {
          name: 'Teaching Assistant of Discrete Mathematics 1',
          time: 'July 2022 - Present',
          skills: ['Discrete Mathematics'],
          description: 'Te Nandayo',
        }
      ],
    },
    {
      affiliation: 'RISTEK Fakultas Ilmu Komputer Universtas Indonesia',
      image: 'https://media.licdn.com/dms/image/C560BAQGjdH4xEp3Q9w/company-logo_100_100/0/1615436063717?e=1683158400&v=beta&t=v9n06tBQGi4rj08LU6eebVltgw86kqx7puFbkOqgYCU',
      positions: [
        {
          name: 'Member of Game Development SIG',
          time: 'July 2022 - Present',
          skills: ['Unity', 'C#', 'Game Design'],
          description: 'Ehe',
        },
      ],
    },
    {
      affiliation: 'RISTEK Fakultas Ilmu Komputer Universtas Indonesia',
      image: 'https://media.licdn.com/dms/image/C560BAQGjdH4xEp3Q9w/company-logo_100_100/0/1615436063717?e=1683158400&v=beta&t=v9n06tBQGi4rj08LU6eebVltgw86kqx7puFbkOqgYCU',
      positions: [
        {
          name: 'Member of Game Development SIG',
          time: 'July 2022 - Present',
          skills: ['Unity', 'C#', 'Game Design'],
          description: 'Ehe',
        },
      ],
    },
  ];
  
  return (
    <div className='flex flex-col gap-4'>
      {
        dummyExperience.map((experience, i) => (
          <div className='border-[1px] border-gray-200 p-3 rounded-xl bg-white drop-shadow flex flex-col lg:flex-row items-center gap-4' key={i}>
            <Image
              className='object-contain'
              src={experience.image}
              width='100'
              height='100'
              alt={experience.affiliation}
            />
            <div className='flex-1 flex flex-col justify-center items-center lg:items-start'>
              <span className='text-xl font-bold text-xl'>{experience.affiliation}</span>
              {
                experience.positions.map((position, j) => (
                  <div className='w-full' key={j}>
                    <div className='h-[0.1rem] bg-gray-300 my-2'></div>
                    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
                      <div>
                        <span className='block text-base'>{position.name}</span>
                        <span className='block text-sm'>{position.time}</span>
                      </div>
                      <div>
                        <div className='flex flex-row flex-wrap gap-2 mt-2 mb-1'>
                          {
                            position.skills.map((skill, k) => (
                              <div className='px-2 pb-[0.1rem] bg-green-300 rounded-xl' key={k}>
                                <span className='text-sm'>{skill}</span>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                    {
                      !!position.description &&
                      <span className='text-sm'>{position.description}</span>
                    }
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};
