import Head from 'next/head';

import { APP_NAME } from '../../config/appConfig';

import { Container } from './styles';

export type Category404Props = {
  errors: [];
};

export default function Category404({ errors }: Category404Props) {
  !errors || (errors.length && console.log(errors));

  return (
    <>
      <Head>
        <title>{`Não existem registros para esta categoria | ${APP_NAME}`}</title>
      </Head>
      <Container>
        <section className="mainSection">
          <p>Não existem registros para esta categoria</p>
        </section>
      </Container>
    </>
  );
}
