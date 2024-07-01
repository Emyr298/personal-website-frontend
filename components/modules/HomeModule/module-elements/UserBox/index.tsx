import React from 'react';
import Image from 'next/image';
import { UserBoxProps } from './interface';
import { getIcon } from '../../../../utils';

export const UserBox: React.FC<UserBoxProps> = ({
  name,
  imageUrl,
  contacts,
}) => {
  const openCV = function () {
    window.open(
      'https://docs.google.com/document/d/1WgMwiMb5TbzXs7bvEJCt2JYcfNAiN32CyrrLlpM5KSg',
      '_blank'
    );
  };

  return (
    <div className='w-[300px]'>
      <Image
        className='rounded-full'
        src={imageUrl}
        width='500'
        height='500'
        alt='Meervix'
      />
      <h1 className='my-2 text-center text-2xl font-bold'>{name}</h1>
      <div className='flex flex-row justify-center'>
        {contacts.map(function (contact, i) {
          return (
            <a
              href={contact.url}
              target='_blank'
              rel='noreferrer'
              title={contact.name}
              key={i}
            >
              {getIcon(contact.name)}
            </a>
          );
        })}
      </div>
      <div className='my-4 flex w-full items-center justify-center'>
        <button
          className='h-[40px] rounded-xl bg-green-300 px-2 py-1 drop-shadow-md transition duration-300 ease-in-out hover:bg-green-400'
          onClick={openCV}
        >
          Open My Latest CV
        </button>
      </div>
    </div>
  );
};
