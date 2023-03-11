import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export const NavBar : React.FC<Props> = ({}) => {
  return (
    <nav className='text-[1.1rem]'>
      <div className='w-full h-[52px] bg-white p-3 absolute top-0 z-50 flex flex-row justify-between items-center drop-shadow-md'>
        <div className='flex flex-row gap-5 items-center'>
          <Link href='/' className='text-xl font-bold'>Emyr298</Link>
          <div className='lg:flex flex-row gap-3 items-center hidden'>
            <button><span className='text-gray-600 hover:text-black'>Profile</span></button>
            <button><span className='text-gray-600 hover:text-black'>Blog</span></button>
          </div>
        </div>
        <div className='lg:flex flex-row gap-3 items-center hidden'>
          <button><span className='text-gray-600 hover:text-black'>Login</span></button>
          <button><span className='text-gray-600 hover:text-black'>Register</span></button>
        </div>
        <button className='w-[25px] h-[25px] text-lg font-bold inline-block lg:hidden'>▼</button>
      </div>
    </nav>
  );
};