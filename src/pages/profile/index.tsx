import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../redux/app/hooks';

import ProfilePage from '../../containers/Profile';

export default function Profile() {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  return <ProfilePage user={user} />;
}
