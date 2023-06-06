import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Poppins } from '@next/font/google';
import { NavBar } from '../components';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

const poppins = Poppins({ weight: "400", subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Emyr298</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins.className}>
        <NavBar />
        <Component {...pageProps} />
        <ToastContainer />
      </main>
    </>
  );
}
