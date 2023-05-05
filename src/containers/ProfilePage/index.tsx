import Head from 'next/head';
import Router from 'next/router';

import { APP_NAME } from '../../config/app-config';
import { useAppDispatch } from '../../redux/app/hooks';
import { authActions } from '../../redux/features/auth/slice';

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
    <>
      <Head>
        <title>{`Perfil | ${APP_NAME}`}</title>
      </Head>
      <Container>
        <section>
          <div id="profileContent">
            <div id="profile">
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
    </>
  );
}
