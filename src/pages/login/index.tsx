import { RootStateOrAny, useSelector } from 'react-redux';
import Router from 'next/router';

import UserPage from '../../containers/UserPage';

export default function Login() {
  const id = useSelector((state: RootStateOrAny) => state.auth.user.id);
  if (id) {
    Router.push('/profile');
  }
  return <UserPage />;
}
