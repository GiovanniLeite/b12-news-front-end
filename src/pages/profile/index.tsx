import Router from 'next/router';

import { useAppSelector } from '../../redux/app/hooks';
import ProfilePage from '../../containers/ProfilePage';

export default function Profile() {
  const user = useAppSelector((state) => state.auth.user);
  if (user) {
    return <ProfilePage user={user} />;
  } else {
    Router.push('/login/');
  }
}
