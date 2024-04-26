import React from 'react';
import { AboutMeProps } from './interface';
import { SkillList } from '../../../../../common';
import { MdCircle } from 'react-icons/md';

export const AboutMe : React.FC<AboutMeProps> = ({
  description,
  skillCategories,
}) => {
  return (
    <div>
      <span className='font-bold text-xl mb-2 block'>Introduction</span>
      <p className='whitespace-pre-line'>
        {description}
      </p>
      <span className='font-bold text-xl mt-8 mb-2 block'>Skills</span>
      <div className='w-full'>
        {
          skillCategories.map((category, k) => {
            const skills = [];
            for (let i = 0; i < category.skills.length; i++) {
              skills.push(category.skills[i].name);
            }
            
            return (
              <div key={k} className='flex flex-col sm:flex-row gap-4 mb-4'>
                <div className='flex lg:flex-row items-center gap-2'>
                  <MdCircle className='w-[10px] h-[10px]' />
                  <span>{category.name}: </span>
                </div>
                <SkillList skills={skills} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
