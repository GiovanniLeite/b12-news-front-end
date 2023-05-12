import Head from 'next/head';

import { APP_NAME } from '../../config/app-config';

import { Container } from './styles';

export default function Page404() {
  return (
    <>
      <Head>
        <title>{`Página 404 | ${APP_NAME}`}</title>
      </Head>
      <Container>
        <h1>
          Erro 404
          <br />
          Página não encontrada
        </h1>
      </Container>
    </>
  );
}
