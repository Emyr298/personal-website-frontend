import React, { useState } from 'react';
import Image from 'next/image';
import { ExperienceProps } from './interface';
import { getTime } from '../../../../../utils';
import { SkillList } from '../../../../../common';

export const Experience : React.FC<ExperienceProps> = ({
  experienceList,
}) => {
  return (
    <div className='h-[calc(75vh-70px)] overflow-y-auto flex flex-col gap-4 p-2'>
      {
        experienceList.map((experience, i) => (
          <div className='border-[1px] border-gray-200 p-3 rounded-xl bg-white drop-shadow flex flex-col items-center md:items-start md:flex-row' key={i}>
            <div className='border-2 border-gray-300 rounded-full overflow-hidden w-[110px] h-[110px] flex items-center justify-center mx-2 p-3'>
              <Image
                className='object-contain'
                src={experience.image}
                width='100'
                height='100'
                alt={experience.affiliation}
              />
            </div>
            <div className='flex-1 flex flex-col justify-center items-center md:items-start w-full px-3'>
              <span className='text-xl font-bold text-xl'>{experience.affiliation}</span>
              {
                experience.positions.map((position, j) => (
                  <div className='w-full' key={j}>
                    <div className='h-[0.1rem] bg-gray-300 my-2'></div>
                    <div className='flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2'>
                      <div>
                        <span className='block text-base font-semibold'>{position.name}</span>
                        <span className='block text-sm'>{getTime(position.startDate, position.endDate)}</span>
                      </div>
                      <SkillList skills={position.skills} />
                    </div>
                    {
                      !!position.description &&
                      <span className='text-sm whitespace-pre-line block mb-3'>{position.description}</span>
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
