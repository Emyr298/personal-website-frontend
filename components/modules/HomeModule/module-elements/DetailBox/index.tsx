import React, { useState } from 'react';
import { AboutMe } from './AboutMe';
import { Education } from './Education';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { DetailBoxProps } from './interface';
import { Carousel } from 'react-responsive-carousel';

enum Page {
  AboutMe,
  Education,
  Experience,
  Projects,
}

export const DetailBox: React.FC<DetailBoxProps> = ({
  description,
  educationHistoryList,
  experienceList,
  projectList,
  skillCategories,
}) => {
  const [page, setPage] = useState<Page>(Page.AboutMe);

  return (
    <div className='detail-box mt-[20px] flex flex-col items-center text-[1.1rem] lg:h-[80vh] lg:w-[50vw]'>
      {' '}
      {/* lg:h-[80vh] */}
      <div className='flex w-fit flex-row flex-wrap justify-center gap-1 rounded-xl bg-white p-2 drop-shadow-md'>
        <button
          className={`h-[40px] rounded-xl px-2 py-1 transition duration-300 ease-in-out ${page === Page.AboutMe ? 'bg-green-300' : 'hover:bg-gray-200'}`}
          onClick={() => setPage(Page.AboutMe)}
        >
          About Me
        </button>
        <button
          className={`h-[40px] rounded-xl px-2 py-1 transition duration-300 ease-in-out ${page === Page.Education ? 'bg-green-300' : 'hover:bg-gray-200'}`}
          onClick={() => setPage(Page.Education)}
        >
          Education
        </button>
        <button
          className={`h-[40px] rounded-xl px-2 py-1 transition duration-300 ease-in-out ${page === Page.Experience ? 'bg-green-300' : 'hover:bg-gray-200'}`}
          onClick={() => setPage(Page.Experience)}
        >
          Experience
        </button>
        <button
          className={`h-[40px] rounded-xl px-2 py-1 transition duration-300 ease-in-out ${page === Page.Projects ? 'bg-green-300' : 'hover:bg-gray-200'}`}
          onClick={() => setPage(Page.Projects)}
        >
          Projects
        </button>
      </div>
      <div className='mt-[20px] w-full text-[1.15rem] lg:h-[calc(100%-75px)] lg:p-[10px]'>
        <Carousel
          autoPlay={false}
          centerMode={false}
          selectedItem={page}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          swipeable={false}
        >
          <AboutMe
            description={description}
            skillCategories={skillCategories}
          />
          <Education educationHistoryList={educationHistoryList} />
          <Experience experienceList={experienceList} />
          <Projects projects={projectList} />
        </Carousel>
      </div>
    </div>
  );
};
