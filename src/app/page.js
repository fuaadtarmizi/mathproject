import Head from 'next/head';
import Worksheet from './components/Worksheet';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fuaad Math Worksheet</title>
        <meta name="description" content="Math worksheet app" />
      </Head>

      <main className="container mx-auto p-5">
        <Worksheet />
      </main>
    </div>
  );
}
