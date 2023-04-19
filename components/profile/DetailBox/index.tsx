import React, { useState } from 'react';
import { AboutMe } from './AboutMe';
import { Education } from './Education';
import { Experience } from './Experience';
import { Projects } from './Projects';

type Props = {};

enum Page {
  AboutMe,
  Education,
  Experience,
  Projects,
};

export const DetailBox : React.FC<Props> = ({}) => {
  const [page, setPage] = useState<Page>(Page.AboutMe);
  
  return (
    <div className='mt-[20px] lg:w-[50vw] lg:h-[80vh] flex flex-col items-center text-[1.1rem]'> {/* lg:h-[80vh] */}
      <div className='w-fit p-2 bg-white drop-shadow-md rounded-xl flex flex-row flex-wrap gap-1 justify-center'>
        <button className={`h-[40px] py-1 px-2 rounded-xl ${page === Page.AboutMe ? 'bg-green-300' : ''}`} onClick={() => setPage(Page.AboutMe)}>About Me</button>
        <button className={`h-[40px] py-1 px-2 rounded-xl ${page === Page.Education ? 'bg-green-300' : ''}`} onClick={() => setPage(Page.Education)}>Education</button>
        <button className={`h-[40px] py-1 px-2 rounded-xl ${page === Page.Experience ? 'bg-green-300' : ''}`} onClick={() => setPage(Page.Experience)}>Experience</button>
        <button className={`h-[40px] py-1 px-2 rounded-xl ${page === Page.Projects ? 'bg-green-300' : ''}`} onClick={() => setPage(Page.Projects)}>Projects</button>
      </div>
      <div className='w-full lg:h-[calc(100%-75px)] mt-[20px] text-[1.15rem] lg:overflow-y-scroll lg:p-[10px]'>
        {page === Page.AboutMe ? <AboutMe /> : null}
        {page === Page.Education ? <Education /> : null}
        {page === Page.Experience ? <Experience /> : null}
        {page === Page.Projects ? <Projects /> : null}
        {page === Page.Certifications ? <Certifications /> : null}
      </div>
    </div>
  );
};
