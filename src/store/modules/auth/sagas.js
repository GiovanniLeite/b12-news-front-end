import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import axios from 'axios';
import Router from 'next/router';

import * as actions from './actions';
import * as types from '../types';
import { API_URL } from '../../../config/app-config';

export function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, `${API_URL}/auth/local`, payload);
    const token = response.data.jwt;
    const user = response.data.user;
    yield put(actions.loginSuccess({ token, user }));
    axios.defaults.headers.common['Authorization'] = `Baerer ${token}`;
    toast.success('Login realizado');
    Router.push(`/`);
  } catch (e) {
    toast.error('Usuário ou senha inválidos.');
    console.log(e.response.data);
    yield put(actions.loginFailure(payload));
  }
}

export function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.common['Authorization'] = `Baerer ${token}`;
}

export function* registerRequest({ payload }) {
  try {
    const response = yield call(
      axios.post,
      `${API_URL}/auth/local/register`,
      payload,
    );
    const token = response.data.jwt;
    const user = response.data.user;
    yield put(actions.registerCreatedSuccess({ token, user }));
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

    yield put(actions.registerFailure(payload));
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
