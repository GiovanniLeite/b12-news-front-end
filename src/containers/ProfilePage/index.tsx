import Head from 'next/head';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import MainContainer from '../../components/MainContainer';
import { Container } from './styled';

export type ProfileProps = {
  user: {
    email: string;
    username: string;
  };
};

export default function ProfilePage({ user }: ProfileProps) {
  const dispatch = useDispatch();
  const email = user.email ? user.email : 'email';
  const username = user.username ? user.username : 'username';

  async function logout() {
    try {
      dispatch(actions.loginFailure());
      Router.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MainContainer>
      <Head>
        <title>Perfil | b12</title>
        <meta
          name="description"
          content="Acompanhe as últimas notícias e vídeos, além de tudo sobre esportes e entretenimento. Conheça o conteúdo e os serviços do b12."
        />
        <meta
          name="keywords"
          content="noticias, videos, esportes, entretenimento, b12, diversao, fotos"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <section className="leftContent">
          <div className="profile">
            <div>
              <h2>Perfil</h2>
              <input type="email" name="email" value={email} disabled />
              <input type="text" name="username" value={username} disabled />
              <button onClick={logout} title="Sair">
                Sair
              </button>
            </div>
          </div>
        </section>
      </Container>
    </MainContainer>
  );
}
