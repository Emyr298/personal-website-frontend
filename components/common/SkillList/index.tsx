import React from 'react';

type Props = {
  skills: string[];
};

export const SkillList: React.FC<Props> = ({ skills }) => {
  return (
    <div className='flex flex-row flex-wrap gap-2'>
      {skills.map((skill, k) => (
        <div className='rounded-xl bg-green-300 px-3' key={k}>
          <span className='h-full text-center text-[0.8rem] leading-[1.9rem]'>
            {skill}
          </span>
        </div>
      ))}
    </div>
  );
};
