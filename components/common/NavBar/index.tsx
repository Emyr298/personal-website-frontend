import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export const NavBar: React.FC<Props> = ({}) => {
  return (
    <nav className='text-[1.1rem]'>
      <div className='absolute top-0 z-50 flex h-[52px] w-full flex-row items-center justify-between bg-white p-3 drop-shadow-md'>
        <Link href='/' className='text-xl font-bold'>
          Meervix
        </Link>
        {/* <div className='flex flex-row gap-3 items-center'>
          <button><span className='text-gray-600 hover:text-black'>Profile</span></button>
          <button><span className='text-gray-600 hover:text-black'>Blog</span></button>
        </div> */}
      </div>
    </nav>
  );
};
