import Head from 'next/head';
import Router from 'next/router';

import { useAppDispatch } from '../../redux/app/hooks';
import { authActions } from '../../redux/features/auth/slice';

import MainContainer from '../../components/MainContainer';
import { Container } from './styles';

export type ProfileProps = {
  user: {
    email: string;
    username: string;
  };
};

export default function ProfilePage({ user }: ProfileProps) {
  const dispatch = useAppDispatch();
  const email = user.email ? user.email : 'email';
  const username = user.username ? user.username : 'username';

  const logout = async () => {
    try {
      dispatch(authActions.loginFailure());
      Router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

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
