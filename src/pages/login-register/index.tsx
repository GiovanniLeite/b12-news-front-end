import Router from 'next/router';

import { useAppSelector } from '../../redux/app/hooks';
import LoginRegisterPage from '../../containers/LoginRegister';

export default function LoginRegister() {
  const user = useAppSelector((state) => state.auth.user);

  if (user) {
    Router.push('/');
  } else {
    return <LoginRegisterPage />;
  }
}
