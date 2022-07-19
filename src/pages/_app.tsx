import { useEffect } from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import * as ga from '../lib/ga';
import { AppWrapper } from '../store';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default MyApp;
