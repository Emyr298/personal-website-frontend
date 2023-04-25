import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const getIcon = (name: string) => {
  name = name.toLowerCase();
  if (name === 'github') {
    return <AiFillGithub className='w-8 h-8' />
  } else if (name === 'linkedin') {
    return <AiFillLinkedin className='w-8 h-8' />
  }
  return null;
};
