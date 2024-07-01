import Link from 'next/link';
import { Card } from '../../common';
import { MdOpenInNew } from 'react-icons/md';
import { AiOutlineRead } from 'react-icons/ai';

export const BlogModule = () => {
  const articles = [
    {
      id: 'asdadsad',
      title: 'Elliptical Patterns',
      sneak_peek: 'BLABLALBALBLA',
      created_at: 'BLABLABLALBA',
      updated_at: 'BLABLABLALBALBAL',
      url: 'https://google.com/',
    },
    {
      id: 'asdadsadx',
      title: 'Elliptical Patterns',
      sneak_peek: 'BLABLALBALBLA',
      created_at: 'BLABLABLALBA',
      updated_at: 'BLABLABLALBALBAL',
      url: 'https://google.com/',
    },
  ];

  return (
    <div className='max-w-screen mt-[84px] flex min-h-[calc(100vh-52px)] justify-center'>
      <div className='flex w-full flex-col items-center gap-4 p-4 lg:w-[50%] lg:p-0'>
        <h1 className='text-2xl font-bold'>Meervix&apos;s Blog</h1>
        <div className='flex w-full flex-col gap-3'>
          {articles.map((article) => {
            return (
              <Card
                key={article.id}
                className='flex flex-col items-stretch gap-1 gap-3 lg:flex-row lg:items-end'
              >
                <div className='flex flex-1 flex-col gap-1'>
                  <h2 className='w-fit text-lg font-bold text-green-600'>
                    {article.title}
                  </h2>
                  <p>{article.sneak_peek}</p>
                  <span className='block text-sm text-gray-600'>
                    Created At: {article.created_at}
                  </span>
                </div>
                <div className='flex justify-end gap-2'>
                  <Link href={article.url}>
                    <button className='flex h-fit w-fit items-center gap-2 rounded-xl bg-green-300 px-3 py-2 text-sm transition duration-300 ease-in-out hover:bg-green-400'>
                      Original
                      <MdOpenInNew className='text-lg' />
                    </button>
                  </Link>
                  <Link href={`/blog/${article.id}`}>
                    <button className='flex h-fit w-fit items-center gap-2 rounded-xl bg-green-300 px-3 py-2 text-sm transition duration-300 ease-in-out hover:bg-green-400'>
                      Read
                      <AiOutlineRead className='text-lg' />
                    </button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
