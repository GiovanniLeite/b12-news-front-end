import Router from 'next/router';

import { useAppSelector } from '../../redux/app/hooks';
import UserPage from '../../containers/UserPage';

export default function Login() {
  const user = useAppSelector((state) => state.auth.user);
  if (user) {
    Router.push('/profile');
  } else {
    return <UserPage />;
  }
}
