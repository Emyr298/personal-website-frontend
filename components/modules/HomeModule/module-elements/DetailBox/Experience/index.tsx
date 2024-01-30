import React, { useState } from 'react';
import Image from 'next/image';
import { ExperienceProps } from './interface';
import { getTime } from '../../../../../utils';

export const Experience : React.FC<ExperienceProps> = ({
  experienceList,
}) => {  
  return (
    <div className='flex flex-col gap-4 p-2'>
      {
        experienceList.map((experience, i) => (
          <div className='border-[1px] border-gray-200 p-3 rounded-xl bg-white drop-shadow flex flex-col md:flex-row items-center gap-4' key={i}>
            <Image
              className='object-contain'
              src={experience.image}
              width='100'
              height='100'
              alt={experience.affiliation}
            />
            <div className='flex-1 flex flex-col justify-center items-center md:items-start'>
              <span className='text-xl font-bold text-xl'>{experience.affiliation}</span>
              {
                experience.positions.map((position, j) => (
                  <div className='w-full' key={j}>
                    <div className='h-[0.1rem] bg-gray-300 my-2'></div>
                    <div className='flex flex-col md:flex-row md:items-center justify-between'>
                      <div>
                        <span className='block text-base'>{position.name}</span>
                        <span className='block text-sm'>{getTime(position.startDate, position.endDate)}</span>
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
