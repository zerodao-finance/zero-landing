import { AppProps } from 'next/app';

import { AppWrapper } from '../store';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
);

export default MyApp;
