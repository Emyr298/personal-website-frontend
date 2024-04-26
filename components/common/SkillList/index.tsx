import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  skills: string[]
};

export const SkillList: React.FC<Props> = ({
  skills,
}) => {
  return (
    <div className='flex flex-row flex-wrap gap-2'>
      {
        skills.map((skill, k) => (
          <div className='px-2 pb-[0.1rem] bg-green-300 rounded-xl' key={k}>
            <span className='text-sm'>{skill}</span>
          </div>
        ))
      }
    </div>
  );
};
