import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import axios, { AxiosError } from 'axios';

import { authActions } from './slice';
import * as actions from './actions';
import { API_URL, API_AUTH_URL } from '../../../config/appConfig';

export function* registerRequest(action: ReturnType<typeof authActions.registerRequest>) {
  try {
    const { data } = yield call(axios.post, `${API_AUTH_URL}/register`, action.payload);
    const { jwt: token, user } = data;

    yield put(authActions.loginSuccess({ token, user }));

    toast.success('Bem-vindo ao b12');
  } catch (error) {
    yield call(handleErrorSaga, error as AxiosError);
  }
}

export function* updateRequest(action: ReturnType<typeof authActions.updateRequest>) {
  try {
    const { id } = action.payload;
    const { data } = yield call(axios.put, `${API_URL}/api/users/${id}`, action.payload);

    yield put(authActions.updateSuccess(data));

    toast.success('Perfil Atualizado');
  } catch (error) {
    yield call(handleErrorSaga, error as AxiosError);
  }
}

export function* loginRequest(action: ReturnType<typeof authActions.loginRequest>) {
  try {
    const { data } = yield call(axios.post, API_AUTH_URL, action.payload);
    const { jwt: token, user } = data;

    yield put(authActions.loginSuccess({ token, user }));
  } catch (error) {
    yield call(handleErrorSaga, error as AxiosError);
  }
}

export function* handleErrorSaga(error: AxiosError) {
  let message = get(error, 'response.data.error.message', '');

  switch (message) {
    case 'Email already taken':
    case 'Username already taken':
    case 'Email or Username are already taken':
      message = 'Email e/ou Usuário já existem';
      break;
    case 'Invalid identifier or password':
      message = 'Usuário e/ou Senha inválidos';
      break;
    default:
      message = 'Houve um Erro desconhecido';
      break;
  }

  console.error(message);
  console.error(error);
  toast.error(message);

  yield put(authActions.logout());
}

export function persistRehydrate(action: ReturnType<typeof actions.persistRehydrate>) {
  const token = get(action.payload, 'auth.token', '');

  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default function* authSaga() {
  yield all([
    takeLatest(authActions.loginRequest.type, loginRequest),
    takeLatest(authActions.registerRequest.type, registerRequest),
    takeLatest(authActions.updateRequest.type, updateRequest),
    takeLatest(actions.persistRehydrate.type, persistRehydrate),
  ]);
}
