import React from 'react';
import Image from 'next/image';
import { UserBoxProps } from './interface';
import { getIcon } from '../../../../utils';

export const UserBox: React.FC<UserBoxProps> = ({
  name,
  imageUrl,
  contacts,
}) => {
  return (
    <div className='w-[300px]'>
      <Image
        className='rounded-full'
        src={imageUrl}
        width='300'
        height='300'
        alt='Emyr298'
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
    </div>
  );
};
