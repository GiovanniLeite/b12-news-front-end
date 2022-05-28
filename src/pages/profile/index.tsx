import { RootStateOrAny, useSelector } from 'react-redux';
import Router from 'next/router';

import ProfilePage from '../../containers/ProfilePage';

export type ProfileProps = {
  user: {
    email: string;
    username: string;
  };
};

export default function Profile() {
  const user = useSelector((state: RootStateOrAny) => state.auth.user);
  if (!user.id) {
    Router.push('/login');
  }

  return <ProfilePage user={user} />;
}
