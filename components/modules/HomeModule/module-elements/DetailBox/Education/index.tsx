import React from 'react';
import Image from 'next/image';
import { EducationProps } from './interface';
import { getTime } from '../../../../../utils';

export const Education : React.FC<EducationProps> = ({
  educationHistoryList,
}) => {  
  return (
    <div className='w-full flex flex-col gap-4 p-2'>
      {
        educationHistoryList.map((educationHistory, i) => (
          <div className='border-[1px] border-gray-200 p-3 rounded-xl bg-white drop-shadow flex flex-col md:flex-row items-center gap-4' key={i}>
            
            <div className='border-2 border-gray-300 rounded-full overflow-hidden w-[110px] h-[110px] flex items-center justify-center mx-2 p-3'>
            <Image
              className='object-contain'
              src={educationHistory.affiliationImage}
              width='100'
              height='100'
              alt={educationHistory.affiliationName}
            />
            </div>
            <div className='flex-1 flex flex-col justify-center items-center md:items-start'>
              <span className='text-xl font-bold'>{educationHistory.affiliationName}</span>
              <span className='text-base'>{educationHistory.degree}</span>
              <span className='text-sm'>{getTime(educationHistory.startDate, educationHistory.endDate)}</span>
            </div>
          </div>
        ))
      }
    </div>
  );
};
