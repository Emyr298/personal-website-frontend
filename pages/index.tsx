import Head from 'next/head'
import { UserBox } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Emyr298</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello, World!</h1>
        <UserBox />
      </main>
    </>
  );
}
