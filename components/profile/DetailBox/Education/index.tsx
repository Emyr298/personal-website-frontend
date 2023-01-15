import React, { useState } from 'react';
import Image from 'next/image';

type Props = {};

export const Education : React.FC<Props> = ({}) => {
  const dummyEducation = [
    {
      association: 'University of Indonesia',
      degree: 'Bachelor of Computer Science',
      time: 'July 2022 - Present',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/UI_Logo.svg/1200px-UI_Logo.svg.png',
    },
    {
      association: 'SMAN 1 Bogor',
      degree: 'Natural Science',
      time: 'July 2021 - July 2022',
      image: 'https://www.dbl.id/uploads/school/7513/552-SMAN_1_BOGOR.png',
    }
  ];
  
  return (
    <div className='flex flex-col gap-4'>
      {
        dummyEducation.map((education) => (
          <div className='border-[1px] border-gray-200 p-3 rounded-xl bg-white drop-shadow flex flex-col lg:flex-row items-center gap-4'>
            <Image
              className='object-contain'
              src={education.image}
              width='100'
              height='100'
              alt={education.association}
            />
            <div className='flex-1 flex flex-col justify-center items-center lg:items-start'>
              <span className='text-xl font-bold'>{education.association}</span>
              <span className='text-base'>{education.degree}</span>
              <span className='text-base'>{education.time}</span>
            </div>
          </div>
        ))
      }
    </div>
  );
};
