import React from 'react';
import { AboutMeProps } from './interface';
import { SkillList } from '../../../../../common';
import { MdCircle } from 'react-icons/md';

export const AboutMe: React.FC<AboutMeProps> = ({
  description,
  skillCategories,
}) => {
  return (
    <div className='h-[calc(75vh-70px)] overflow-y-auto'>
      <span className='mb-2 block text-xl font-bold'>Introduction</span>
      <p className='whitespace-pre-line'>{description}</p>
      <span className='mb-2 mt-8 block text-xl font-bold'>Skills</span>
      <div className='w-full'>
        {skillCategories.map((category, k) => {
          const skills = [];
          for (let i = 0; i < category.skills.length; i++) {
            skills.push(category.skills[i].name);
          }

          return (
            <div key={k} className='mb-4 flex flex-col gap-4 sm:flex-row'>
              <div className='flex items-center gap-2 lg:flex-row'>
                <MdCircle className='h-[10px] w-[10px]' />
                <span>{category.name}: </span>
              </div>
              <SkillList skills={skills} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
