import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserBox, DetailBox } from './module-elements';
import axios from 'axios';
import {
  ContactResponse,
  EducationsResponse,
  ExperienceResponse,
  GeneralDataResponse,
  ProjectsResponse,
  SkillCategoryResponse,
  UserBoxData,
} from './interface';

export const HomeModule = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserBoxData | null>(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      let generalResponse,
        contactsResponse,
        educationsResponse,
        experienceResponse,
        projectsResponse,
        skillCategoriesResponse;

      try {
        const generalResponsePromise = axios<GeneralDataResponse>({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_APP_API_URL}/about/`,
        });
        const contactsResponsePromise = axios<ContactResponse[]>({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_APP_API_URL}/about/contacts/`,
        });
        const educationsResponsePromise = axios<EducationsResponse[]>({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_APP_API_URL}/about/educations/`,
        });
        const experienceResponsePromise = axios<ExperienceResponse[]>({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_APP_API_URL}/about/affiliations/experience/`,
        });
        const projectsResponsePromise = axios<ProjectsResponse[]>({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_APP_API_URL}/about/projects/`,
        });
        const skillCategoriesResponsePromise = axios<SkillCategoryResponse[]>({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_APP_API_URL}/about/skills/by-category/`,
        });

        generalResponse = await generalResponsePromise;
        contactsResponse = await contactsResponsePromise;
        educationsResponse = await educationsResponsePromise;
        experienceResponse = await experienceResponsePromise;
        projectsResponse = await projectsResponsePromise;
        skillCategoriesResponse = await skillCategoriesResponsePromise;
      } catch (error) {
        setLoading(false);
        toast('Error on fetching data', {
          closeButton: false,
          position: toast.POSITION.BOTTOM_RIGHT,
          type: 'error',
        });
        return;
      }

      const generalData = generalResponse.data;
      const contacts = contactsResponse.data;
      const educations = educationsResponse.data;
      const experience = experienceResponse.data;
      const projects = projectsResponse.data;
      const skillCategories = skillCategoriesResponse.data;

      const newData: UserBoxData = {
        name: generalData.name,
        description: generalData.description,
        imageUrl: generalData.image_url,
        contacts: contacts.map((contact) => {
          return {
            name: contact.platform_name,
            url: contact.url,
          };
        }),
        educations: educations.map((education) => {
          return {
            affiliationName: education.affiliation.name,
            affiliationImage: education.affiliation.image_url,
            degree: education.degree,
            field: education.field,
            startDate: new Date(education.start_date),
            endDate: !education.end_date ? null : new Date(education.end_date),
          };
        }),
        experience: experience.map((curExperience) => {
          return {
            affiliation: curExperience.name,
            image: curExperience.image_url,
            positions: curExperience.positions.map((position) => {
              return {
                name: position.position,
                description: position.description,
                skills: position.skills,
                startDate: new Date(position.start_date),
                endDate: !position.end_date
                  ? null
                  : new Date(position.end_date),
              };
            }),
          };
        }),
        projects: projects.map((curProject) => {
          return {
            name: curProject.name,
            image: curProject.image_url,
            description: curProject.description,
            urls: curProject.project_urls,
            skills: curProject.skills,
          };
        }),
        skillCategories: skillCategories.map((curCategory) => {
          return {
            name: curCategory.name,
            skills: curCategory.skills,
          };
        }),
      };

      setUserData(newData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <svg
          className='mr-2 h-8 w-8 animate-spin fill-green-300 text-gray-500 dark:text-gray-500'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
          />
        </svg>
      </div>
    );
  } else if (!userData) {
    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <span>404 Not Found</span>
      </div>
    );
  } else {
    return (
      <div className='max-w-screen mt-[52px] flex min-h-[calc(100vh-52px)] flex-col items-center overflow-x-hidden p-4 lg:flex-row lg:justify-evenly'>
        <UserBox
          name={userData.name}
          imageUrl={userData.imageUrl}
          contacts={userData.contacts}
        />
        <DetailBox
          description={userData.description}
          educationHistoryList={userData.educations}
          experienceList={userData.experience}
          projectList={userData.projects}
          skillCategories={userData.skillCategories}
        />
      </div>
    );
  }
};
