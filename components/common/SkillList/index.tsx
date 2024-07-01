import React from 'react';

type Props = {
  skills: string[];
  right?: boolean;
};

export const SkillList: React.FC<Props> = ({ skills, right = false }) => {
  const containerCss = {
    left: 'flex flex-row flex-wrap gap-2 justify-start',
    right: 'flex flex-row flex-wrap gap-2 justify-end',
  };

  return (
    <div className={right ? containerCss.right : containerCss.left}>
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
