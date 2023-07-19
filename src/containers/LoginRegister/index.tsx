import Head from 'next/head';
import { useState, ChangeEvent, FormEvent } from 'react';

import { APP_NAME } from '../../config/appConfig';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { authActions } from '../../redux/features/auth/slice';
import { UserDataForm } from '../../types/users/userForm';
import { isFormValid } from '../../utils/formErrors';

import { Container } from './styles';
import Loading from '../../components/Loading';

export default function LoginRegister() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  const [userData, setUserData] = useState<UserDataForm>({
    name: '',
    email: '',
    identifier: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, saveButton: string) => {
    e.preventDefault();

    // isFormValid - Check if the form data is valid and handle errors and messages related to Form
    if (isFormValid(userData, saveButton)) {
      const { name, email, identifier, username, password } = userData;

      saveButton === 'login'
        ? dispatch(authActions.loginRequest({ identifier, password }))
        : dispatch(authActions.registerRequest({ name, email, username, password }));
    }
  };

  return (
    <>
      <Head>
        <title>{`Login | Registro | ${APP_NAME}`}</title>
      </Head>
      <Container>
        <section className="mainSection">
          <Loading isLoading={isLoading} />
          <form className="formUser" onSubmit={(e) => handleSubmit(e, 'login')}>
            <h2>Login</h2>
            <input
              id="identifier"
              name="identifier"
              type="text"
              onChange={(e) => handleUserData(e)}
              placeholder="Usuário"
              title="Usuário"
            />
            <input
              id="passwordLogin"
              name="password"
              type="password"
              onChange={(e) => handleUserData(e)}
              placeholder="********"
              title="Senha"
            />
            <button type="submit" className="buttonForm">
              Entrar
            </button>
          </form>
          <form className="formUser" onSubmit={(e) => handleSubmit(e, 'register')}>
            <h2>Registro</h2>
            <input
              id="name"
              name="name"
              type="text"
              onChange={(e) => handleUserData(e)}
              placeholder="Nome"
              title="Nome"
            />
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) => handleUserData(e)}
              placeholder="Email"
              title="Email"
            />
            <input
              id="username"
              name="username"
              type="text"
              onChange={(e) => handleUserData(e)}
              placeholder="Usuário"
              title="Usuário"
            />
            <input
              id="password"
              name="password"
              type="password"
              onChange={(e) => handleUserData(e)}
              placeholder="********"
              title="Senha"
            />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={(e) => handleUserData(e)}
              placeholder="********"
              title="Confirmar senha"
            />
            <button type="submit" className="buttonForm">
              Registrar-se
            </button>
          </form>
        </section>
      </Container>
    </>
  );
}
