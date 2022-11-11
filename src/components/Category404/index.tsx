import Head from 'next/head';

import { APP_NAME } from '../../config/app-config';

import { Container } from './styles';

export default function Category404() {
  return (
    <>
      <Head>
        <title>{APP_NAME} - Notícias, esportes, entretenimento e mais</title>
        <meta
          name="description"
          content="Acompanhe as últimas notícias e vídeos, além de tudo sobre esportes e entretenimento. Conheça o conteúdo e os serviços do b12."
        />
        <meta
          name="keywords"
          content="noticias, videos, esportes, entretenimento, b12, diversao, fotos"
        />
      </Head>
      <Container>
        <p>Não existem registros para esta categoria.</p>
      </Container>
    </>
  );
}
