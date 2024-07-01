import React from 'react';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <nav className='text-[1.1rem]'>
      <div className='absolute top-0 z-50 flex h-[52px] w-full flex-row items-center justify-between bg-white px-5 py-3 drop-shadow-md'>
        <Link href='/' className='text-xl font-bold text-black'>
          Meervix
        </Link>
        <div className='flex flex-row items-center gap-4'>
          <Link href='/'>
            <span className='text-gray-600 hover:text-black'>Profile</span>
          </Link>
          <Link href='/blog'>
            <span className='text-gray-600 hover:text-black'>Blog</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
