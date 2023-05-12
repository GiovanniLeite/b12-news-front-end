import Head from 'next/head';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as val from 'validator';

import { APP_NAME } from '../../config/app-config';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { authActions } from '../../redux/features/auth/slice';

import { Container } from './styles';
import Loading from '../../components/Loading';

export default function UserPage() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [userDataRegister, setUserDataRegister] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [userDataLogin, setUserDataLogin] = useState({
    identifier: '',
    password: '',
  });

  const handleChange = (e, register: boolean) => {
    const { name, value } = e.target;

    if (register) {
      setUserDataRegister({ ...userDataRegister, [name]: value });
    } else {
      setUserDataLogin({ ...userDataLogin, [name]: value });
    }
  };

  const handleSubmit = async (e, register: boolean) => {
    e.preventDefault();
    let formErrors = false;

    if (register) {
      const emailRegister = document.getElementById(
        'emailRegister',
      ) as HTMLInputElement;
      const usernameRegister = document.getElementById(
        'usernameRegister',
      ) as HTMLInputElement;
      const pass = document.getElementById(
        'passwordRegister',
      ) as HTMLInputElement;
      const passConfirm = document.getElementById(
        'passwordConfirmation',
      ) as HTMLInputElement;

      if (!val.default.isEmail(userDataRegister.email)) {
        formErrors = true;
        toast.error('E-mail inválido');
        emailRegister.style.border = '1px solid #ff0000';
      }

      if (
        userDataRegister.username.length < 6 ||
        userDataRegister.username.length > 15
      ) {
        formErrors = true;
        toast.error('Usuário deve ter entre 6 e 15 caracteres');
        usernameRegister.style.border = '1px solid #ff0000';
      }

      if (pass.value.length < 6 || passConfirm.value.length > 10) {
        formErrors = true;
        toast.error('Senha deve ter entre 6 e 10 caracteres');
        pass.style.border = '1px solid #ff0000';
        passConfirm.style.border = '1px solid #ff0000';
      }

      if (userDataRegister.password !== passwordConfirmation) {
        formErrors = true;
        toast.error('Senha e confirmação devem ser iguais');
        pass.style.border = '1px solid #ff0000';
        passConfirm.style.border = '1px solid #ff0000';
      }

      if (formErrors) return;
      dispatch(authActions.registerRequest({ ...userDataRegister }));
    } else {
      const userLogin = document.getElementById(
        'usernameLogin',
      ) as HTMLInputElement;
      const passLogin = document.getElementById(
        'passwordLogin',
      ) as HTMLInputElement;

      if (userDataLogin.identifier.trim() === '') {
        formErrors = true;
        toast.error('Campo Usuário não deve estar vazio');
        userLogin.style.border = '1px solid #ff0000';
      }

      if (userDataLogin.password.trim() === '') {
        formErrors = true;
        toast.error('Campo Senha não deve estar vazio');
        passLogin.style.border = '1px solid #ff0000';
      }

      if (formErrors) return;
      dispatch(authActions.loginRequest({ ...userDataLogin }));
    }
  };

  return (
    <>
      <Head>
        <title>{`Login | Registro | ${APP_NAME}`}</title>
      </Head>
      <Container>
        <section>
          <Loading isLoading={isLoading} />
          <div className="leftContent">
            <div>
              <form onSubmit={(e) => handleSubmit(e, false)}>
                <h2>Login</h2>
                <input
                  id="usernameLogin"
                  type="text"
                  name="identifier"
                  onChange={(e) => handleChange(e, false)}
                  placeholder="Usuário"
                />
                <input
                  id="passwordLogin"
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e, false)}
                  placeholder="Senha"
                />
                <button>Entrar</button>
              </form>
            </div>
          </div>
          <div className="rightContent">
            <form onSubmit={(e) => handleSubmit(e, true)}>
              <h2>Registrar</h2>
              <input
                id="emailRegister"
                type="email"
                name="email"
                onChange={(e) => handleChange(e, true)}
                placeholder="Email"
              />
              <input
                id="usernameRegister"
                type="text"
                name="username"
                onChange={(e) => handleChange(e, true)}
                placeholder="Usuário"
              />
              <input
                id="passwordRegister"
                type="password"
                name="password"
                onChange={(e) => handleChange(e, true)}
                placeholder="Senha"
              />
              <input
                id="passwordConfirmation"
                type="password"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder="Cofirmação de senha"
              />
              <button>Registrar-se</button>
            </form>
          </div>
        </section>
      </Container>
    </>
  );
}
