import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import axios from 'axios';
import Router from 'next/router';

import { authActions } from './slice';
import * as actions from './actions';
import { API_URL } from '../../../config/appConfig';

export function* loginRequest(action: ReturnType<typeof authActions.loginRequest>) {
  try {
    const response = yield call(axios.post, `${API_URL}/auth/local`, action.payload);
    const token = response.data.jwt;
    const user = response.data.user;

    yield put(authActions.loginSuccess({ token, user }));

    axios.defaults.headers.common['Authorization'] = `Baerer ${token}`;
  } catch (e) {
    toast.error('Usuário ou senha inválidos.');
    console.log(e.response.data);

    yield put(authActions.loginFailure());
  }
}

export function persistRehydrate(action: ReturnType<typeof actions.persistRehydrate>) {
  const token = get(action.payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.common['Authorization'] = `Baerer ${token}`;
}

export function* registerRequest(action: ReturnType<typeof authActions.registerRequest>) {
  try {
    const response = yield call(axios.post, `${API_URL}/auth/local/register`, action.payload);
    const token = response.data.jwt;
    const user = response.data.user;

    yield put(authActions.registerCreatedSuccess({ token, user }));

    toast.success('Conta criada com sucesso!');
    Router.push(`/profile`);
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(authActions.registerFailure());
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(authActions.loginRequest.type, loginRequest),
    takeLatest(actions.persistRehydrate.type, persistRehydrate),
    takeLatest(authActions.registerRequest.type, registerRequest),
  ]);
}
