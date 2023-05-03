import { AppProps } from 'next/app';
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics';

import { AnalyticsStore } from '../stores';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageViews();

  return (
    <AnalyticsStore>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </AnalyticsStore>
  );
};

export default MyApp;
