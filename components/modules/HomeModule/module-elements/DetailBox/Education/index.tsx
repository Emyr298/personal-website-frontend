import React from 'react';
import Image from 'next/image';
import { EducationProps } from './interface';
import { getTime } from '../../../../../utils';

export const Education: React.FC<EducationProps> = ({
  educationHistoryList,
}) => {
  return (
    <div className='flex h-[calc(75vh-70px)] w-full flex-col gap-4 overflow-y-auto p-2'>
      {educationHistoryList.map((educationHistory, i) => (
        <div
          className='flex flex-col items-center gap-4 rounded-xl border-[1px] border-gray-200 bg-white p-3 drop-shadow md:flex-row'
          key={i}
        >
          <div className='mx-2 flex h-[110px] w-[110px] items-center justify-center overflow-hidden rounded-full border-2 border-gray-300 p-3'>
            <Image
              className='object-contain'
              src={educationHistory.affiliationImage}
              width='100'
              height='100'
              alt={educationHistory.affiliationName}
            />
          </div>
          <div className='flex flex-1 flex-col items-center justify-center md:items-start'>
            <span className='text-xl font-bold'>
              {educationHistory.affiliationName}
            </span>
            <span className='text-base'>{educationHistory.degree}</span>
            <span className='text-sm'>
              {getTime(educationHistory.startDate, educationHistory.endDate)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
