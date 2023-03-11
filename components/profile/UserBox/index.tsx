import React from 'react';
import Image from 'next/image';

type Props = {};

export const UserBox : React.FC<Props> = ({}) => {
  const dummyContacts = [
    {
      name: 'GitHub',
      accountName: 'Emyr298',
      url: 'https://github.com/Emyr298',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
  ];
  
  return (
    <div className='w-[300px]'>
      <Image className='rounded-full' src='https://avatars.githubusercontent.com/u/101683735?v=4' width='300' height='300' alt='Emyr298' />
      <h1 className='my-2 text-2xl text-center font-bold'>Emir Shamsuddin Fadhlurrahman</h1>
      <div className='flex flex-row justify-center'>
        {
          dummyContacts.map(function(contact, i) {
            return <a href={contact.url} target='_blank' rel='noreferrer' title={contact.name + ': ' + contact.accountName} key={i}>
              <Image
                src={contact.imageUrl}
                width='25'
                height='25'
                alt={contact.name + ' Icon'}
              />
            </a>
          })
        }
      </div>
    </div>
  );
};
