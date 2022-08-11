import { AppProps } from 'next/app';
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics';

import { AppWrapper } from '../store';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageViews();

  return (
    <AppWrapper>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default MyApp;
