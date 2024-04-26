import React from 'react';
import Image from 'next/image';
import { UserBoxProps } from './interface';
import { getIcon } from '../../../../utils';

export const UserBox: React.FC<UserBoxProps> = ({
  name,
  imageUrl,
  contacts,
}) => {
  const openCV = function() {
    window.open('https://docs.google.com/document/d/1CKzIAVX2n9HgdDHPs17Kd0lQicJQx0M2nYWJzVcNR5c/edit?usp=sharing', '_blank');
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
      <h1 className='my-2 text-2xl text-center font-bold'>{name}</h1>
      <div className='flex flex-row justify-center'>
        {
          contacts.map(function(contact, i) {
            return <a href={contact.url} target='_blank' rel='noreferrer' title={contact.name} key={i}>
              {getIcon(contact.name)}
            </a>
          })
        }
      </div>
      <div className='my-4 w-full flex items-center justify-center'>
        <button
          className='h-[40px] py-1 px-2 rounded-xl drop-shadow-md bg-green-300 hover:bg-green-400 transition ease-in-out duration-300'
          onClick={openCV}
        >
          Open My Latest CV
        </button>
      </div>
    </div>
  );
};
