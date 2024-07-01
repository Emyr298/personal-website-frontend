import React, { useState } from 'react';
import Image from 'next/image';
import { ExperienceProps } from './interface';
import { getTime } from '../../../../../utils';
import { SkillList } from '../../../../../common';

export const Experience: React.FC<ExperienceProps> = ({ experienceList }) => {
  return (
    <div className='flex h-[calc(75vh-70px)] flex-col gap-4 overflow-y-auto p-2'>
      {experienceList.map((experience, i) => (
        <div
          className='flex flex-col items-center rounded-xl border-[1px] border-gray-200 bg-white p-3 drop-shadow md:flex-row md:items-start'
          key={i}
        >
          <div className='mx-2 flex h-[110px] w-[110px] items-center justify-center overflow-hidden rounded-full border-2 border-gray-300 p-3'>
            <Image
              className='object-contain'
              src={experience.image}
              width='100'
              height='100'
              alt={experience.affiliation}
            />
          </div>
          <div className='flex w-full flex-1 flex-col items-center justify-center px-3 md:items-start'>
            <span className='text-xl font-bold'>{experience.affiliation}</span>
            {experience.positions.map((position, j) => (
              <div className='w-full' key={j}>
                <div className='my-2 h-[0.1rem] bg-gray-300'></div>
                <div className='mb-3 flex flex-col justify-between gap-2 md:flex-row md:items-center'>
                  <div>
                    <span className='block text-base font-semibold'>
                      {position.name}
                    </span>
                    <span className='block text-sm'>
                      {getTime(position.startDate, position.endDate)}
                    </span>
                  </div>
                  <SkillList skills={position.skills} />
                </div>
                {!!position.description && (
                  <span className='mb-3 block whitespace-pre-line text-sm'>
                    {position.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
