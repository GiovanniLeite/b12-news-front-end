import '@fontsource/open-sans';
import '@fontsource/raleway';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { APP_NAME } from '../config/app-config';
import { persistor, store } from '../redux/app/store';
import { GlobalStyles } from '../styles/globalStyles';
import { theme } from '../styles/theme';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{`${APP_NAME} - Notícias, esportes, entretenimento e mais`}</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ToastContainer autoClose={3000} className="toast-container" />
            <GlobalStyles />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
