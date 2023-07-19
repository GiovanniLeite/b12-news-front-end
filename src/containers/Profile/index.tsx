import Head from 'next/head';
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';

import { APP_NAME } from '../../config/appConfig';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { authActions } from '../../redux/features/auth/slice';
import { User } from '../../redux/models';
import { isFormValid } from '../../utils/formErrors';
import { UserDataForm } from '../../types/users/userForm';

import { Container } from './styles';
import Loading from '../../components/Loading';

export type ProfileProps = {
  user: User | undefined;
};

export default function Profile({ user }: ProfileProps) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  const [userData, setUserData] = useState<UserDataForm>({
    id: 0,
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [disabledInfoInputs, setDisabledInfoInputs] = useState(true);
  const [disabledPasswordInputs, setDisabledPasswordInputs] = useState(true);
  const [saveButton, setSaveButton] = useState('');

  useEffect(() => {
    if (user) {
      const { id, name, email, username } = user;
      setUserData((prevUserData) => ({
        ...prevUserData,
        id,
        name,
        email,
        username,
      }));
    }
  }, [user]);

  const handleButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.target as HTMLButtonElement;

    setDisabledInfoInputs(id === 'editInfo' ? false : true);
    setDisabledPasswordInputs(id === 'editPassword' ? false : true);
    setSaveButton(id);
  };

  const handleUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // isFormValid - Check if the form data is valid and handle errors and messages related to Form
    if (isFormValid(userData, saveButton)) {
      const { id, name, email, username, password } = userData;

      const updateData = saveButton === 'editInfo' ? { id, name, email, username } : { id, password };
      dispatch(authActions.updateRequest(updateData));

      // inputs and save buttons are disabled
      setDisabledInfoInputs(true);
      setDisabledPasswordInputs(true);
      setSaveButton('');
    }
  };

  return (
    <>
      <Head>
        <title>{`Perfil | ${APP_NAME}`}</title>
      </Head>
      <Container>
        <section className="mainSection">
          <Loading isLoading={isLoading} />
          <form className="formUser" onSubmit={(e) => handleSubmit(e)}>
            <h2>Perfil</h2>
            <input
              id="name"
              name="name"
              title="Nome"
              type="text"
              value={userData.name}
              onChange={(e) => handleUserData(e)}
              disabled={disabledInfoInputs}
            />
            <input
              id="email"
              name="email"
              title="Email"
              type="email"
              value={userData.email}
              onChange={(e) => handleUserData(e)}
              disabled={disabledInfoInputs}
            />
            <input
              id="username"
              name="username"
              title="Usuário"
              type="text"
              value={userData.username}
              onChange={(e) => handleUserData(e)}
              disabled={disabledInfoInputs}
            />
            {saveButton === 'editInfo' ? (
              <button className="buttonForm" type="submit">
                Salvar
              </button>
            ) : (
              <button id="editInfo" className="buttonForm" onClick={(e) => handleButton(e)}>
                Editar Informações
              </button>
            )}
            <div>
              <input
                id="password"
                name="password"
                title="Senha"
                type="password"
                onChange={(e) => handleUserData(e)}
                placeholder="********"
                disabled={disabledPasswordInputs}
              />
              <input
                id="confirmPassword"
                name="confirmPassword"
                title="Confirmar senha"
                type="password"
                onChange={(e) => handleUserData(e)}
                placeholder="********"
                disabled={disabledPasswordInputs}
              />
              {saveButton === 'editPassword' ? (
                <button className="buttonForm" type="submit">
                  Salvar
                </button>
              ) : (
                <button id="editPassword" className="buttonForm" onClick={(e) => handleButton(e)}>
                  Editar Senha
                </button>
              )}
            </div>
          </form>
        </section>
      </Container>
    </>
  );
}
