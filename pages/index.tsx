import Head from 'next/head';
import TrafficLight from '@/components/TrafficLight';

export default function Home() {
  return (
    <>
      <Head>
        <title>Traffic Light Simulator</title>
        <meta name="description" content="Interactive traffic light with automatic transitions" />
        <link rel="stylesheet" href="/css/main.css" />
      </Head>

      <main>
        <TrafficLight />
      </main>
    </>
  );
}
