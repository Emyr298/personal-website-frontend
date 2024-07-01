import Link from 'next/link';
import { Card } from '../../common';
import { MdOpenInNew } from 'react-icons/md';
import { AiOutlineRead } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { ArticleIndex } from './interface';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getReadableDate } from '../../utils';

export const BlogModule = () => {
  const [articles, setArticles] = useState<ArticleIndex[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = (
          await axios<ArticleIndex[]>({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_APP_API_URL}/blog/`,
          })
        ).data;
        setArticles(articles);
      } catch (error) {
        toast.error("Couldn't fetch articles");
        setError("Couldn't fetch articles");
      }
    };

    fetchArticles();
  }, []);

  if (error) {
    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <span>404 Not Found</span>
      </div>
    );
  }

  if (articles === null) {
    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <svg
          className='mr-2 h-8 w-8 animate-spin fill-green-300 text-gray-500 dark:text-gray-500'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
          />
        </svg>
      </div>
    );
  }

  if (articles.length == 0) {
    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <span>No Articles Found</span>
      </div>
    );
  }

  return (
    <div className='max-w-screen mb-4 mt-[84px] flex min-h-[calc(100vh-52px)] justify-center'>
      <div className='flex w-full flex-col items-center gap-4 p-4 lg:w-[50%] lg:p-0'>
        <h1 className='text-2xl font-bold'>Meervix&apos;s Blog</h1>
        <div className='flex w-full flex-col gap-4'>
          {articles.map((article) => {
            return (
              <Card
                key={article.id}
                className='flex flex-col items-stretch gap-1 gap-3 p-4 lg:items-end'
              >
                <div className='flex flex-1 flex-col gap-1'>
                  <h2 className='w-fit text-lg font-bold text-green-600'>
                    {article.name}
                  </h2>

                  <span className='block text-[0.85rem] text-gray-600'>
                    Created At: {getReadableDate(article.created_at)}
                  </span>
                  <p className='text-sm'>{article.sneak_peek}</p>
                </div>
                <div className='flex justify-end gap-2'>
                  <Link href={article.url} target='_blank'>
                    <button className='flex h-fit w-fit items-center gap-2 rounded-xl bg-green-300 px-3 py-2 text-sm transition duration-300 ease-in-out hover:bg-green-400'>
                      Medium
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
