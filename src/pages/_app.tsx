import '@fontsource/open-sans';
import '@fontsource/raleway';

import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../redux/app/store';
import { GlobalStyles } from '../styles/globalStyles';
import { theme } from '../styles/theme';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}

export default MyApp;
