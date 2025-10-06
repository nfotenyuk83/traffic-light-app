import Head from 'next/head';
import TrafficLight from '@/components/TrafficLight';

export default function Home() {
    const basePath = process.env.NODE_ENV === 'production' ? '/traffic-light-app' : '';

    return (
        <>
            <Head>
                <title>Traffic Light Simulator</title>
                <meta name="description" content="Interactive traffic light with automatic transitions" />
                <link rel="stylesheet" href={`${basePath}/css/main.css`} />
            </Head>

            <main>
                <TrafficLight />
            </main>
        </>
    );
}