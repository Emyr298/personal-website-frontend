import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsGit } from 'react-icons/bs';
import { MdOpenInNew } from 'react-icons/md';

export const getIcon = (name: string) => {
  name = name.toLowerCase();
  if (name === 'github') {
    return <AiFillGithub className='w-8 h-8' />
  } else if (name === 'linkedin') {
    return <AiFillLinkedin className='w-8 h-8' />
  }
  return null;
};

export const getProjectUrlIcon = (name: string) => {
  name = name.toLowerCase();
  if (name.includes('repository')) {
    return <BsGit className='w-[24px] h-[24px]' />
  } else {
    return <MdOpenInNew className='w-[24px] h-[24px]' />
  }
}
